import {handleActions} from "redux-actions";
import * as actions from "../actions"
import {v4 as uuidV4} from 'uuid';

const defaultState = {
  taskList: []
}

const todoListPageReducer = handleActions(
  {
    [actions.CREATE_TASK]: (state, {payload}) => {
      const {text} = payload;
      const newTask = {
        text: text,
        isEditMode: false,
        id: uuidV4(),
      }

      return {
        taskList: [newTask, ...state.taskList]
      }
    },

    [actions.SET_EDIT_MODE]: (state, {payload: taskId}) => {
      const updatedState = state.taskList.map(task => ({
        ...task,
        isEditMode: taskId === task.id
      }))

      return {
        taskList: updatedState
      }
    },

    [actions.DELETE_TASK]: (state, {payload: taskId}) => {
      const listCopy = [...state.taskList];
      const itemIndexToRemove = listCopy.findIndex(task => task.id === taskId);
      listCopy.splice(itemIndexToRemove, 1);

      return {
        taskList: listCopy,
      }
    },

    [actions.SAVE_EDITED_TASK]: (state, {payload}) => {
      const {id, newText} = payload;
      const updatedState = state.taskList.map(task => {
        const isTaskToUpdate = task.id === id;

        return {
          ...task,
          text: isTaskToUpdate ? newText: task.text,
          isEditMode: isTaskToUpdate ? false : task.isEditMode,
        }
      })
      return {
        taskList: updatedState,
      }
    },

    [actions.DISCARD_CHANGES]: (state, {payload: taskId}) => {
      const updatedState = state.taskList.map(task => ({
        ...task,
        isEditMode: task.id === taskId ? false : task.isEditMode,
      }))
      return {
        taskList: updatedState,
      }
    }

},
  defaultState
);

export default todoListPageReducer