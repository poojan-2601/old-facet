import alertReducer from "./alertReducer";
import loginReducer from "./loginReucer";

import { combineReducers } from 'redux';

const rootreducer = combineReducers({
    alertReducer,
    loginReducer
})

export default rootreducer;