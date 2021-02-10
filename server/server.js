const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

const apiRouter = require('./routes/api');

/**
 * parse request body
 */
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

/**
 * handle static files
 */
app.use(express.static(path.resolve(__dirname, '../client')));

// app.get('/', (req, res)=>{
//     res.header('content-type', 'text/html; charset=utf-8')
//     return res.status(200).sendFile(path.resolve(__dirname,'../client/index.html'))
//   });

/**
 * define route handlers
 */
app.use('/api', apiRouter)

const PORT = 3000;
app.listen(PORT, console.log("listening on port: ", PORT));