import React from 'react';
import styles from './styles.module.scss'


const ToDoTask = ({handleRemoveTask}) => {
  return (
    <div className={styles.common}>
      <div className={styles.wrapper}><input type="text" /></div>
      <button className={styles.deleteButton} onClick={handleRemoveTask}>DEL</button>
    </div>

  );
};

export default ToDoTask;
