import { Router } from 'express';
import initializeData from '../controllers/initializeData';
import gptController from '../controllers/gptController';
import dbController from '../controllers/dbController';

const chatRouter = Router();

chatRouter.post(
  '/',
  initializeData.initialize,
  gptController.getSummary,
  gptController.getPros,
  gptController.getCons,
  gptController.getAlternatives,
  dbController.addData,
  (req, res) => {
    return res.status(200).json(res.locals.data);
  }
);

export default chatRouter;
