import {combineReducers} from "redux";

import countersPageReducer from "../Pages/ReduxCounterPage/reducers";
import toDoListReducer from "../Pages/ReduxListToDo/reducers";
import todoListPageReducer from "../Pages/TodoListPage/reducers";
import pokemonsPageReducer from '../Pages/PokemonsPage/reducers'
import pokemonDetailsPageReducer from '../Pages/PokemonDetailedPage/reducers'

const rootReducer = combineReducers({
  countersPage: countersPageReducer,
  listsPage: toDoListReducer,
  todoPage: todoListPageReducer,
  pokemonsPage: pokemonsPageReducer,
  pokemonDetails: pokemonDetailsPageReducer,
});

export default rootReducer;