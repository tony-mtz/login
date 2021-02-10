const express = require('express');
const path = require('path');

const cookieController = require('../controllers/cookieController');
const userController = require('../controllers/userController');
// server/controllers/cookieController.js
//place your controller here
// const starWarsController = require('../controllers/starWarsController');

const router = express.Router();

/**
login page
*/
router.post('/signup', userController.signup, (req, res)=> {
  console.log('in /signup of /api')
  res.header('content-type', 'text/html; charset=utf-8');
  return res.status(200).send('success...signup');
});

router.post('/login', userController.login, (req, res)=> {
  console.log('in /signup of /api')
  res.header('content-type', 'text/html; charset=utf-8');
  return res.status(200).send('success...login');
});

router.post('/users', userController.getAll, (req, res)=> {
  console.log('in / of /api')
  res.header('content-type', 'text/html; charset=utf-8');
  return res.status(200).send('check the console');
});

router.get('/',  (req, res)=> {
  console.log('in / of /api')
  res.header('content-type', 'text/html; charset=utf-8');
  return res.status(200).sendFile(path.resolve(__dirname, '../../client/index.html'));
});

module.exports = router;