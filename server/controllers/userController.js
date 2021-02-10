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

module.exports = userController;