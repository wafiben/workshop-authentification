import {combineReducers} from "redux"
import AuthReducer from './AuthReducer';
const rootReducer= combineReducers({AuthReducer:AuthReducer});
export default rootReducer;