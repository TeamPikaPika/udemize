import createConnectionPool, {sql} from '@databases/pg';
import tables from '@databases/pg-typed';
import DatabaseSchema from './__generated__';

export {sql};

const db = createConnectionPool();
export default db;

const {users, tech, user_tech} = tables<DatabaseSchema>({
  databaseSchema: require('./__generated__/schema.json'),
});
export {users, tech, user_tech};



// import db, { tech } from './db';
// const getTitle = async (title: string) => {
//   return await tech(db).findOne({title})
// }

// const run = async () => {
//   const title = await getTitle('react')
//   console.log('title:', title)
// }

// run()