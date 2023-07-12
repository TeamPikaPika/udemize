import { Request, Response, NextFunction } from 'express';
import GPTActions from '../actions/GPTActions';
import { prosCons } from '../types';
import db, { users, tech } from '../db';

const gptController: prosCons = {
  getProsCons: async (req: Request, res: Response, next: NextFunction) => {
    const regExp = new RegExp('(1.|2.|3.).+?([\\\n]|.$)', 'g');
    const pros: {[key: string]: string} = {}

    const { userInput } = req.body;
    let GPTpros = await GPTActions.getPros(userInput);
    GPTpros = GPTpros.match(regExp);
    await GPTpros.map((el: string, i: number) => {
      pros[`pro${i + 1}`] = el.replace(/((1\. |2\. |3\. )|\r\n|\n|\r)/gm, '');
    });
    res.locals.data = pros;
    // res.locals.prosCons = pro1;
    return next();
  },
};

export default gptController;
