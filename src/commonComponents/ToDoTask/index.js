import React from 'react';
import styles from './styles.module.scss'


const ToDoTask = ({handleRemoveTask, id}) => {
  return (
    <div className={styles.common}>
      <div className={styles.wrapper}><input type="text" /></div>
      <button className={styles.deleteButton} onClick={() => handleRemoveTask(id)}>DEL</button>
    </div>

  );
};

export default ToDoTask;
