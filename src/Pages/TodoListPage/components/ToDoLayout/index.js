import TodoItem from "../TodoItem";
import {Button} from "@mui/material";
import EditableTodo from "../EditableTodo";

const TodoLayout = ({
                      createTaskForm,
                      handleChange,
                      handleTaskCreate,
                      taskList,
                      handleEditModeOn,
                      handleTaskRemove,
                      handleEditSave,
                      handleDiscardChanges,
}) => {
  return (
    <div>
      <div>
        <form onSubmit={handleTaskCreate}>
          <input
            value={createTaskForm.taskText}
            type={"text"}
            name={'taskText'}
            onChange={handleChange}
          />
          <Button type={"submit"}>Create Task</Button>
        </form>
      </div>

      <div>
        {taskList.map((task, index) => {
          return task.isEditMode ?
            < EditableTodo
              key={task.id}
              id={task.id}
              initialText={task.text}
              handleSave={handleEditSave}
              handleUndo={handleDiscardChanges}
            /> :
            <TodoItem
              handleEdit={() => handleEditModeOn(task.id)}
              key={task.id}
              text={task.text}
              orderNumber={index+1}
              handleDelete={() => handleTaskRemove(task.id)}
            />
        })}
      </div>
      {/*<TodoItem text={'dsffsdffds'} orderNumber={1}/>*/}
    </div>
  );
};

export default TodoLayout;
