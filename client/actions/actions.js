import * as types from '../constants/actionTypes';

// export const validateUser = 

export const setEmail = (newEmail) => ({
    type: types.SET_EMAIL,
    payload: newEmail,
});

export const setPwd = (newPwd) => ({
    type: types.SET_PWD,
    payload: newPwd,
});

export const validateUser = (user) =>({
    type: types.VALIDATE_USER,
    payload: user
})