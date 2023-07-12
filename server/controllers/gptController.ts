import { Request, Response, NextFunction } from 'express';
import GPTActions from '../actions/GPTActions';
import { GPTController } from '../types';

/**
 * Regular expressions to parse through the data we recieve from the GPT API
 */
const regExp = new RegExp('(1.|2.|3.).+?([\\\n]|.$)', 'g');
const regExpReplace = new RegExp('((1\. |2\. |3\. )|\r\n|\n|\r)', 'gm');


const gptController: GPTController = {
  getSummary: async (req: Request, res: Response, next: NextFunction) => {

    const prompt: string = `give me a summary of the tech ${res.locals.data.title} limiting the entire thing to no more that 750 characters including whitespace I cannot hold more characters that that in my database.`
  
    const summary = await GPTActions.prompt(prompt);
    res.locals.data.summary = summary
    return next();
  },

  getPros: async (req: Request, res: Response, next: NextFunction) => {
    const pros: {[key: string]: string} = {}

    const prompt: string = `give me 3 pros of the tech ${res.locals.data.title} where each point in no more that 250 characters including whitespace I cannot hold more characters that that in my database.`

    let GPTpros = await GPTActions.prompt(prompt);
    GPTpros = GPTpros.match(regExp);
    await GPTpros.map((el: string, i: number) => {
      pros[`pro${i + 1}`] = el.replace(regExpReplace, '');
    });
    res.locals.data.pros = pros
    return next();
  },
  
  getCons: async (req: Request, res: Response, next: NextFunction) => {
    const cons: {[key: string]: string} = {}

    const prompt: string = `give me 3 cons of the tech ${res.locals.data.title} where each point in no more that 250 characters including whitespace I cannot hold more characters that that in my database.`

    let GPTcons = await GPTActions.prompt(prompt);
    GPTcons = GPTcons.match(regExp);
    await GPTcons.map((el: string, i: number) => {
      cons[`con${i + 1}`] = el.replace(regExpReplace, '');
    });
    res.locals.data.cons = cons;
    return next();
  },

  getAlternatives: async (req: Request, res: Response, next: NextFunction) => {
    const alternatives: {[key: string]: string} = {}

    const prompt: string = `give me 3 alternatives of the tech ${res.locals.data.title} where each point in no more that 400 characters including whitespace I cannot hold more characters that that in my database.`

    let GPTalternatives = await GPTActions.prompt(prompt);
    GPTalternatives = GPTalternatives.match(regExp);
    await GPTalternatives.map((el: string, i: number) => {
      alternatives[`alternative${i + 1}`] = el.replace(regExpReplace, '');
    });
    res.locals.data.alternatives = alternatives;
    return next();
  },
};

export default gptController;
