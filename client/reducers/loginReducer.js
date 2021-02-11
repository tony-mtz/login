import * as types from '../constants/actionTypes';

const initialState = {
    newEmail : '',
    newPwd : ''
};

const loginReducer = (state = initialState, action) => {
    let newEmail;
    let newPwd;

    switch(action.type){
        case types.VALIDATE_USER:{


            return {
                ...state,
                newEmail: '',
                newPwd: '',
            };
        };

        case types.SET_EMAIL:{
            newEmail = action.payload;
            return {...state, newEmail}
        }

        case types.SET_PWD:{
            newPwd = action.payload;
            return {...state, newPwd}
        }
        default: 
            return state;
    }
};

export default loginReducer;