import {combineReducers} from "redux";

import countersPageReducer from "../Pages/ReduxCounterPage/reducers";
import toDoListReducer from "../Pages/ReduxListToDo/reducers";


const rootReducer = combineReducers({
  countersPage: countersPageReducer,
  listsPage: toDoListReducer,
});

export default rootReducer;