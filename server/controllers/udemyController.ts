import { Request, Response, NextFunction } from 'express';
const udemyController = {};

udemyController.getCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userInput } = req.body;
  if (!userInput)
    return next({
      log: 'Missing userInput!!',
      status: 400,
      message: { err: 'Missing userInput!!' },
    });
  const queryStr;
  const addQueryStr;
  const result = await db.query(queryStr);
  try {
    if (result) {
      res.locals.url = result.rows[0];
      return next();
    } else {
      const postResult = await db.query(addQueryStr);
      const fetchResult = await db.query(queryStr);
      res.locals.url = fetchResult.rows[0];
      return next();
    }
  } catch (err) {
    next({
      log: 'Error in udemyController.getCourse',
    });
  }
};

export default udemyController;
