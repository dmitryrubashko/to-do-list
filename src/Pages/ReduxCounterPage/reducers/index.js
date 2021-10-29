import {handleActions} from 'redux-actions'
import {v4 as uuidV4} from "uuid"
import * as actions from '../actions'

const defaultState = {
  counters: []
}

const countersPageReducer = handleActions({
  [actions.CREATE_COUNTER]: (state) => {
    const stateCopy = [...state.counters];
    stateCopy.push({id: uuidV4() ,countValue: 0})

    return {
      counters: stateCopy
    };
  },

  [actions.INCREASE_COUNTER]: (state, action) => {
    const counterId = action.payload;
    const updatedCounters = state.counters.map(({id, countValue}) => ({
      id,
      countValue: id === counterId ? countValue + 1 :countValue
    }))
    return {
      counters: updatedCounters
    }
  }
},
  defaultState
)

export default countersPageReducer