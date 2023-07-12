import { Router } from 'express';
import initializeData from '../controllers/initializeData';
import dbController from '../controllers/dbController';

const dbRouter = Router();

dbRouter.post(
  '/',
  initializeData.initialize,
  dbController.getData,
  (req, res) => {
    return res.status(200).json(res.locals.data);
  }
);

export default dbRouter;
