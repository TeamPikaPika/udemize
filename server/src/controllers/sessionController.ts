const Session = require('../models/sessionModel');

export const sessionController = {
  isLoggedIn: async (req, res, next) => {
    const { ssid } = req.cookies;
    try {
      const sessionDoc = await Session.findOne({ cookieId: ssid });
      if (!sessionDoc) return res.redirect('/signup');
      return next();
    } catch (err) {
      return next(err);
    }
  },
  startSession: async (req, res, next) => {
    const { id } = res.locals.user;
    try {
      const sessionDoc = await Session.create({ cookieId: id });
      return next();
    } catch (err) {
      return next(err);
    }
  },
};
