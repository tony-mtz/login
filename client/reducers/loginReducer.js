import * as types from '../constants/actionTypes';


const initialState = {
    userInput: [{hello:'hello'}],
    newEmail : '',
    newPwd : ''
};
const loginReducer = (state = initialState, action) => {
    let newEmail;
    let newPwd;
    let userInput;

    switch(action.type){

        //not useful till an api call
        case types.VALIDATE_USER:{
            userInput = state.userInput.slice();
            newEmail = state.newEmail;
            newPwd = state.newPwd;

            const userInfo = { email: newEmail, pwd: newPwd};            

            if(newEmail ==='' || newPwd === ''){
                return {...state}
            }else{
                userInput.push(userInfo);
            
                return {
                    ...state,
                    userInput,                
                };
            }
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