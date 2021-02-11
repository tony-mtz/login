const bcrypt = require('bcryptjs')

const db = require('../../model/userModel');

const userController = {};

userController.getAll = (req, res, next) =>{
    const getAllUsers = 'select * from users';

    db.query(getAllUsers)
        .then(data =>{
            console.log('get all query response ', data.rows);
            return next();
        })
        .catch(e => {
            console.error(e.stack);
            return next(e);
        })
}

/*
https://www.npmjs.com/package/bcrypt

 //check is 
// bcrypt.compare('aaaa', result)
//   .then(compareRes =>{
//       console.log('compare: ', compareRes)
//   })

*/

function insertFunc(first, last, email, pwd){
    const intoStr = 'insert into users (firstName, lastName, email, pwd) ';
    const valuesStr = "values (" + "'"+
                       first + "'"+ "," + "'"+ 
                       last + "'"+ "," + "'"+ 
                       email +"'"+ "," + "'"+ 
                       pwd +"'"+ ");"
    return intoStr+valuesStr;
}

userController.signup = (req, res, next) =>{    

    const {firstname, lastname, email, pwd} = req.body;
    console.log('req body:', req.body)
    const saltRounds = 10;
    bcrypt.hash(pwd, saltRounds)
      .then(result=>{
        console.log('hash results: ', result);
        db.query(insertFunc(firstname, lastname, email, result))
          .then(dbResult => {
            console.log('inserting query: , ', dbResult);
            return next();
        })
        .catch(e =>{
            /*
            todo: if duplicate email address then send email taken 
                  login instead or use diff email address
            */
            console.log('error from db.query: ', e);
            return next(e);
        })   
      })
      .catch(err =>{
          console.log('error in bcrypt: ', err);
          return next(err)
      });
}

userController.login = (req, res, next) =>{    
    const {email, pwd} = req.body;
    const getOneUser = "select * from users where email ="+"'"+email+"';";
    console.log('query: ', getOneUser);
    console.log('req body:', req.body)
    
    db.query(getOneUser)
      .then(result =>{
          bcrypt.compare(pwd, result.rows[0].pwd)
            .then(bcryptRes =>{
                console.log('login compare: ', bcryptRes)
                if(bcryptRes){
                    return next()
                }else{
                    throw "Wrong email or password!"
                }                
            })
            .catch(e => {
                        console.error('login error: ', e);
                        return next(e);
            });
      })    
      .catch(err =>{
          console.log('error in login query: ', err);
          return next(err)
      });
}

module.exports = userController;