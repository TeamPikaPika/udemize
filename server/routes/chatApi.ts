import { Router } from 'express';
import gptController from '../controllers/gptController';

const chatRouter = Router();

chatRouter.post('/', gptController.getProsCons, (req, res) => {
  return res.status(200).json(res.locals.prosCons);
});

export default chatRouter;
