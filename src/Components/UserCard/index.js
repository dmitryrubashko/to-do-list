import React from 'react';
import styles from "./styles.module.scss"

const UserCard = ({name, age, city, handleClick}) => {
  return (
    <div className={styles.theme}>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>City: {city}</h3>

      <button onClick={handleClick}>GO TO DETAILS</button>
    </div>

  );
};

export default UserCard;
