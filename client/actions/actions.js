import axios from 'axios';

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

export const validateUser = () =>(dispatch, getState) =>{

    const options = {
        url: '/api/login',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data:{
            newEmail: getState().newEmail, 
            newPwd: getState().newPwd
        }
    };
    axios(options)
        .then(response =>{
            console.log('what is the response?: ', response)
            dispatch({
                type: types.VALIDATE_USER,
                payload: response
            });
        })
        .catch(e=>{
            console.log('error at validate user: ', error)
        });
};