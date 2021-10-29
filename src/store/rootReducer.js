import {combineReducers} from "redux";

import countersPageReducer from "../Pages/ReduxCounterPage/reducers";


const rootReducer = combineReducers({
  countersPage: countersPageReducer,
});

export default rootReducer;