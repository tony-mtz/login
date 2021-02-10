const cookieController = {};

/**
* setCookie - set a cookie with a random number
*/
cookieController.setCookie = (req, res, next) => {
  // write code here
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  // console.log(req.body);
  res.cookie('codesmith', 'hi');
  console.log('cookies >>> ', req.cookies);
  // res.cookie('ssid', 'blah test')

  if (!req.cookies.secret) res.cookie('secret' , `${getRandomInt(99)}`);
  return next();

}

/**
* setSSIDCookie - store the user id in a cookie
*/
cookieController.setSSIDCookie = (err,req, res, next) => {
  // write code here
  if(Array.isArray(res.locals.data)){
    res.cookie('ssid', `${res.locals.data[0]._id}`, { httpOnly: true });
  }else{
    res.cookie('ssid', `${res.locals.data._id}`, { httpOnly: true });
  }
  console.log('Added ssid >>> ', req.cookies);
  return next({});

}

module.exports = cookieController;