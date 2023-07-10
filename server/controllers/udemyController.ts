const udemyController = {};

udemyController.getCourse = async (req, res, next) => {
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
    } else {
      const postResult = await db.query(addQueryStr);
      const fetchResult = await db.query(queryStr);
      res.locals.url = fetchResult.rows[0];
    }
  } catch (err) {
    next({
      log: 'Error in udemyController.getCourse',
    });
  }
};
