import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '' };
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
        case EMAIL_CHANGED:

    }
};
