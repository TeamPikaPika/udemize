import { DBController } from '../../types';
import db, { users, tech } from '../../db';

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
    };

    try {
      run();

      return next();
    } catch (err) {
      return next(err);
    }
  },

  getData: async (req, res, next) => {
    const { title }: { title: string } = res.locals.data;

    const findData = async (title: string) => {
      return await tech(db).findOne({ title });
    };

    const run = async () => {
      const data = await findData(title);

      if (data === null) {
        console.log('no data');
        return;
      }

      const pros = {};
      const cons = {};
      const alternatives = {};

      for (let i = 1; i <= 3; i++) {
        pros[`pro${i}`] = data[`pro${i}`];
        cons[`con${i}`] = data[`con${i}`];
        alternatives[`alternative${i}`] = data[`alternative${i}`];
      }

      res.locals.data.summary = data.summary;
      res.locals.data.pros = pros;
      res.locals.data.cons = cons;
      res.locals.data.alternatives = alternatives;

      db.dispose();
    };

    try {
      await run();
      if (!res.locals.data.summary) return next();
      
      console.log('recieved data from db:', res.locals.data);
      return res.status(200).json(res.locals.data);
    } catch (err) {
      return next(err);
    }
  },
};

export default dbController;
