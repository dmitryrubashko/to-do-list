import React from 'react';
import styles from './styles.module.scss'
import PropTypes from "prop-types"


const Counter = ({
                   countValue,
                   handleIncrement,
                   handleDecrement,
                   handleReset,
                   handleRemove,
                    id
}) => {

  const isEven = countValue % 2 === 0;

  return (
    <>

    <div className={styles.wrapper} style={{backgroundColor: isEven? 'rgb(93, 78, 91)' : 'rgb(96, 79, 61)'}}>

      <div className={styles.description}>SuperMegaCounter2000</div>

      <div className={styles.display}>
        {countValue}
      </div>

      <div className={styles.propertiesDisplay}>
        {isEven ? 'Even Number' : 'Odd Number'}
      </div>

      <div className={styles.contolButtons}>
        <button className={styles.controlButtonLeft} onClick={handleDecrement}>-</button>
        <button className={styles.resetButton} onClick={handleReset}>Reset</button>
        <button className={styles.controlButton} onClick={() => handleIncrement(id)}>+</button>
        <button onClick={handleRemove}>Remove</button>
      </div>

    </div>
    </>
  );
};

Counter.propTypes = {
  countValue: PropTypes.number,
  handleIncrement: PropTypes.func,
  handleDecrement: PropTypes.func,
  parityType: PropTypes.string,
}

export default Counter;