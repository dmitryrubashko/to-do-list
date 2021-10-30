import ReduxToDoListLayout from "../components/ReduxToDoListLayout";
import {useDispatch, useSelector} from "react-redux";
import {CREATE_NEWTASK} from "../actions";
import {useCallback} from "react";

const ReduxToDoListContainer = () => {

  const dispatch = useDispatch();
  const {lists} = useSelector((store) => store.listsPage )

  const handleCreateNewTask = useCallback(() => {
    dispatch(CREATE_NEWTASK())
  }, [dispatch])

  return (
    <ReduxToDoListLayout
      handleCreateNewTask={handleCreateNewTask}
      lists={lists}
    />
  );
};

export default ReduxToDoListContainer;
