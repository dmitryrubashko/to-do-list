import {handleActions} from 'redux-actions';

import * as actions from '../actions'

const  defaultState = {
  list: [],
  isLoading: false,
  error: null,
}

const pokemonsPageReducer = handleActions(
  {
    [actions.GET_POKEMONS_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),

    [actions.GET_POKEMONS_SUCCESS]: (state, {payload}) => ({
      ...state,
      list: payload.results,
      isLoading: false,
    }),

    [actions.GET_POKEMONS_FAIL]: (state, {payload}) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
},
  defaultState
)

export default pokemonsPageReducer;