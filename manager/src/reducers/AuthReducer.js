import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL } from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: '' };
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
          return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_SUCCESS:
            //Be careful. If there exists a variable that isnt
            //defined, it will throw an error and pass over the next bit of code
            return { ...state, user: action.payload, error: '' };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authenitcation Failed.', password: '' };
        default:
            return state;
    }
};
