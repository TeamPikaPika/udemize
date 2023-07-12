import express from 'express';
import path from 'path';
import { Request, Response, NextFunction } from 'express';
import { userController } from './src/controllers/userController';
import { cookieController } from './src/controllers/cookieController';
import { sessionController } from './src/controllers/sessionController';
import 'dotenv/config';
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
// var cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

/* 
Connect to database 
*/
mongoose.connect(
  'mongodb+srv://junealee07:udemize@cluster0.ap2isxt.mongodb.net/?retryWrites=true&w=majority'
);
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

/**
 * Automatically parse urlencoded body content and form data from incoming requests and place it
 * in req.body
 */
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

/* 
Import routers
*/
// import udemyRouter from './routes/udemyApi';
import chatRouter from './src/routes/chatApi';

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
app.get('/api', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../src/index.html'));
});

// app.get('/api/sessions/oauth/google', googleOauthHandler);
/* 
Route handlers
*/

app.post(
  '/signup',
  userController.createUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    res.redirect('/dashboard');
  }
);

/**
 * login
 */
app.post(
  '/login',
  userController.verifyUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    res.redirect('/dashboard');
  }
);

// app.use('/udemy', udemyRouter);
app.use('/chatgpt', chatRouter);

/* 
catch-all route handler for any requests to an unknown route 
*/
app.use('*', (req, res) => res.status(404).json('Page not found'));

/* 
Global error handler 
*/
app.use('/', (err, req: Request, res: Response, next: NextFunction) => {
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
