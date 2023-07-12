import express from 'express';
import path from 'path';
import { Request, Response, NextFunction } from 'express';
import 'dotenv/config';
// var cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

/* 
Import routers
*/
import udemyRouter from './routes/udemyApi';
import chatRouter from './routes/chatApi';

/*
Automatically parse urlencoded body content and form data from incoming requests and place it in req.body
 */
app.use(express.json());
app.use(express.urlencoded());

/* 
Serve static files
*/
app.use('/assets', express.static(path.resolve(__dirname, '../src/assets')));

/* 
Serve index.html 
*/
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../src/index.html'));
});

/* 
Route handlers
*/
app.use('/api/udemy', udemyRouter);
app.use('/chatgpt', chatRouter);

/* 
catch-all route handler for any requests to an unknown route 
*/
app.use('*', (req, res) => res.status(404).json('Page not found'));

/* 
Global error handler 
*/
app.use('/', (err: any, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error', // Log is for the developer as it will show up in the terminal
    status: 400,
    message: { err: 'An error occurred' }, // For the client as it will be returned to the client as specified in line 90
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/* 
Start server 
*/
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
