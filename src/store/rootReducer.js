import {combineReducers} from "redux";

import countersPageReducer from "../Pages/ReduxCounterPage/reducers";
import toDoListReducer from "../Pages/ReduxListToDo/reducers";
import todoListPageReducer from "../Pages/TodoListPage/reducers";


const rootReducer = combineReducers({
  countersPage: countersPageReducer,
  listsPage: toDoListReducer,
  todoPage: todoListPageReducer,
});

export default rootReducer;