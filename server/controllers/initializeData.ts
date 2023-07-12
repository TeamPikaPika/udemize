import { InitializeData } from '../types';

const initializeData: InitializeData = {
  initialize: (req, res, next) => {
    const { userInput } = req.body

    res.locals.data = { title: userInput.toLowerCase() };

    return next()
  }
}

export default initializeData;