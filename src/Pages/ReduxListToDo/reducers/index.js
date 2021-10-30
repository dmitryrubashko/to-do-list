import {handleActions} from 'redux-actions'
import {v4 as uuidV4} from "uuid"
import * as actions from '../actions'

const defaultState = {
  lists: []
}

const toDoListReducer = handleActions({
    [actions.CREATE_NEWTASK]: (state) => {
      const stateCopy = [...state.lists];
      stateCopy.push({id: uuidV4()})

      return {
        lists: stateCopy
      };
    },

    [actions.REMOVE_TASK]: (state) => {
      console.log(123)
      return state
    }

  },
  defaultState
)

export default toDoListReducer