import ReduxToDoListLayout from "../components/ReduxToDoListLayout";
import {useDispatch, useSelector} from "react-redux";
import {CREATE_NEWTASK, REMOVE_TASK} from "../actions";
import {useCallback} from "react";

const ReduxToDoListContainer = () => {

  const dispatch = useDispatch();
  const {lists} = useSelector((store) => store.listsPage)

  const handleCreateNewTask = useCallback(() => {
    dispatch(CREATE_NEWTASK())
  }, [dispatch])

  const handleRemoveTask = useCallback((id) => {
    dispatch(REMOVE_TASK(id))
  }, [])

  return (
    <ReduxToDoListLayout
      handleCreateNewTask={handleCreateNewTask}
      lists={lists}
      handleRemoveTask={handleRemoveTask}
    />
  );
};

export default ReduxToDoListContainer;
