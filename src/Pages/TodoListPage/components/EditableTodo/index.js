import {useState, useCallback} from 'react'
import styles from "../TodoItem/styles.module.scss";
import {Button} from "@mui/material";
import {CheckCircle as CheckCircleIcon, Cancel as CancelIcon} from "@mui/icons-material";

const EditableTodo = ({initialText, handleSave, handleUndo, id}) => {
  const [editableValue, setEditableValue] = useState(initialText);

  const handleEdit = useCallback((event) => {
    const {value} = event.target;

    setEditableValue(value)
  }, [])

  return (
    <div className={styles.wrapper}>
      <input type={"text"} value={editableValue} onChange={handleEdit}/>

      <div className={styles.buttonsWrapper}>
        <Button
          variant={"outlined"}
          endIcon={<CheckCircleIcon />}
          onClick={() => handleSave({id, newText: editableValue})}>Save
        </Button>
        <Button
          variant={"outlined"}
          endIcon={<CancelIcon />}
          onClick={() => handleUndo(id)}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default EditableTodo;
