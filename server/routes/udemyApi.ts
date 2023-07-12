import { Router } from 'express';
import udemyController from '../controllers/udemyController';

const udemyRouter = Router();

udemyRouter.get('/:userInput', udemyController.getCourse, (req, res) => {
  // return res.status(200)._construct(res.locals.url);
  console.log('in route')
  return res.status(200).send(res.locals);

});

export default udemyRouter;
