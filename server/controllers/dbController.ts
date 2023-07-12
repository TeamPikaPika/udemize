import { DBController } from '../types';
import db, { users, tech } from '../db';

const dbController: DBController = {
  addData: async (req, res, next) => {
    const {
      title,
      summary,
      pros,
      cons,
      alternatives,
    }: {
      title: string;
      summary: string;
      pros: { [key: string]: string };
      cons: { [key: string]: string };
      alternatives: { [key: string]: string };
    } = res.locals.data;

    const insertData = async (
      title: string,
      summary: string,
      pros: { [key: string]: string },
      cons: { [key: string]: string },
      alternatives: { [key: string]: string }
    ): Promise<void> => {

      await tech(db).insert({
        title,
        summary,
        pro1: pros.pro1,
        pro2: pros.pro2,
        pro3: pros.pro3,
        con1: cons.con1,
        con2: cons.con2,
        con3: cons.con3,
        alternative1: alternatives.alternative1,
        alternative2: alternatives.alternative2,
        alternative3: alternatives.alternative3,
      });
    };

    const run = async () => {
      await insertData(title, summary, pros, cons, alternatives);

      await db.dispose();
    }

    try {
      run()
    } catch(err) {
      return next(err);
    }

    return next();
  },
};

export default dbController;
