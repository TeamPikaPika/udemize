const express = require('express');
const path = require('path');

var cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;


/*
 * Automatically parse urlencoded body content and form data from incoming requests and place it
 * in req.body
 */
app.use(express.json());
app.use(express.urlencoded()); 

/* 
Serve static files
*/
app.use('/assets', express.static(path.resolve(__dirname, '../src/assets')));

/* 
import controllers 
*/
