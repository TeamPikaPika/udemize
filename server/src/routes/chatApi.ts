import { Router } from 'express';
import gptController from '../controllers/gptController';

const chatRouter = Router();

chatRouter.post(
  '/',
  gptController.getSummary,
  gptController.getPros,
  gptController.getCons,
  gptController.getAlternatives,
  (req, res) => {
    return res.status(200).json(res.locals.data);
  }
);

export default chatRouter;
