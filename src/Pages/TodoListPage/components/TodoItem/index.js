import {Button} from "@mui/material";
import {DeleteForever as DeleteForeverIcon, Edit as EditIcon} from '@mui/icons-material';
import styles from './styles.module.scss'

const TodoItem = ({orderNumber, text, handleEdit, handleDelete}) => {
  return (
    <div className={styles.wrapper}>
      <div>{`${orderNumber}. ${text}`}</div>
      <div className={styles.buttonsWrapper}>
        <Button variant={"outlined"} endIcon={<EditIcon/>} onClick={handleEdit}>Edit</Button>
        <Button variant={"outlined"} endIcon={<DeleteForeverIcon/>} onClick={handleDelete}>Delete</Button>
      </div>
    </div>
  );
};

export default TodoItem;
