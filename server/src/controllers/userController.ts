const User = require('../models/userModel');
const bcryptt = require('bcryptjs');
export const userController = {
  getAllUsers: (req, res, next) => {
    User.find({}, (err, users) => {
      if (err) return next('Error in userController.getAllUsers: ' + JSON.stringify(err));
      res.locals.users = users;
      return next();
    });
  },
  createUser: async (req, res, next) => {
    const { email, password, firstName, lastName } = req.body;
    if (!email || !password || !firstName || !lastName) {
      return next('Error: email and Password are required');
    }
    try {
      const userDoc = await User.create({ firstName, lastName, email, password });
      res.locals.user = userDoc;
      return next();
    } catch (err) {
      return next(err);
    }
  },
  verifyUser: async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return next('Error: email and Password are required');
    }
    try {
      const userDoc = await User.findOne({ email });
      if (!userDoc || !(await bcryptt.compare(password, userDoc.password)))
        return res.redirect('/signup');
      res.locals.user = userDoc;
      return next();
    } catch (err) {
      return next(err);
    }
  },
};
