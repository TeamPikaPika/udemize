import { Request, Response, NextFunction } from 'express';
// import { getUdemyLink } from '../actions/getUdemyLink';
import { Course } from '../../types';

const udemyController: Course = {
  getCourse: async (req: Request, res: Response, next: NextFunction) => {
    // const { userInput } = req.body;
    // if (!userInput)
    //   return next({
    //     log: 'Missing userInput!!',
    //     status: 400,
    //     message: { err: 'Missing userInput!!' },
    //   });
    // const queryStr = ``;
    // const addQueryStr = ``;
    // const result = await db.query(queryStr);
    // try {
    //   let url;
    //   if (result) {
    //     url = result.rows[0];
    //   } else {
    //     // Helper function to fetch link from Udemy API
    //     const newLink = await getUdemyLink(userInput);
    //     // In this query, you will have to use newLink as it will be the new link that wasn't already in the database
    //     const postResult = await db.query(addQueryStr);
    //     const fetchResult = await db.query(queryStr);
    //     url = fetchResult.rows[0];
    //   }
    //   res.locals.url = url;
    //   return next();
    // } catch (err) {
    //   next({
    //     log: 'Error in udemyController.getCourse',
    //   });
    // }
  },
};

export default udemyController;
