const cookieController = {};

/**
* setSSIDCookie - store the user id in a cookie
*/
cookieController.setJWTCookie = (req, res, next) => {
  // write code here
  // if(Array.isArray(res.locals.data)){
  //   res.cookie('ssid', `${res.locals.data[0]._id}`, { httpOnly: true });
  // }else{
  //   res.cookie('ssid', `${res.locals.data._id}`, { httpOnly: true });
  // }
  // console.log('Added ssid >>> ', req.cookies);
  // return next({});
  res.cookie('jwt', 'hello 1', {httpOnly: true});
  next();

}

module.exports = cookieController;