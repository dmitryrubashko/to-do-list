import {Button} from "@mui/material";
import ToDoTask from "../../../../commonComponents/ToDoTask";
import {ROUTES} from "../../../../Routes/routeNames";
import {Link} from "react-router-dom";

const ReduxToDoListLayout = ({handleCreateNewTask, lists, handleRemoveTask}) => {
  return (
    <div>
      <Link to={ROUTES.HOME}>
        <Button variant={'outlined'} >Home Page</Button>
      </Link>
      <Button variant={'outlined'} onClick={handleCreateNewTask}>Create New Task</Button>
      <div>
        {lists.map(({id}) => (
          <ToDoTask
            key={id}
            handleCreateNewTask={handleCreateNewTask}
            handleRemoveTask={() => handleRemoveTask(id)}
            id={id}
          />
        ))}
      </div>
    </div>
  );
};

export default ReduxToDoListLayout;
