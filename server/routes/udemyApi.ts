import { Router } from 'express';
import udemyController from '../controllers/udemyController';

const udemyRouter = Router();

udemyRouter.get('/', udemyController.getCourse, (req, res) => {
  return res.status(200)._construct(res.locals.url);
});

export default udemyRouter;
