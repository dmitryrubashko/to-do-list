import {Button} from "@mui/material";
import ToDoTask from "../../../../commonComponents/ToDoTask";
import {ROUTES} from "../../../../Routes/routeNames";
import styles from "../../../FunctionalCounter/Components/Layout/styles.module.scss";
import {Link} from "react-router-dom";

const ReduxToDoListLayout = ({handleCreateNewTask, lists}) => {
  return (
    <div>
      <Link to={ROUTES.HOME}>
        <button className={styles.button}>Home Page</button>
      </Link>
      <Button variant={'outlined'} onClick={handleCreateNewTask}>Create New Task</Button>
      <div>
        {lists.map(({id}) => (
          <ToDoTask
            key={id}
            handleCreateNewTask={handleCreateNewTask}
            id={id}
          />
        ))}
      </div>
    </div>
  );
};

export default ReduxToDoListLayout;
