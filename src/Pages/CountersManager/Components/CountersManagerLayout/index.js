import {Button} from "@mui/material";
import Counter from "../../../../commonComponents/Counter";
import React, {useMemo} from "react";
import {ROUTES} from "../../../../Routes/routeNames";
import styles from "../../../Home/styles.module.scss";
import {Link} from "react-router-dom";

const CountersManagerLayout = ({
                                 countersList,
                                 handleCounterCreate,
                                 handleCounterRemove,
                                 handleIncrement,
                                 handleDecrement,
                                 handleCountersListClear,
                                 handleReset
}) => {
  const totalSum = useMemo(() => {
    return countersList.reduce((result, {countValue}) => result + countValue, 0)
  }, [countersList]);

  return (
    <div>
      <Button variant={"outlined"} onClick={handleCounterCreate}>Create Counter</Button>
      <Button variant={"outlined"} onClick={handleCountersListClear}>Reset</Button>

      <Link to={ROUTES.HOME}>
        <button className={styles.button}>Home</button>
      </Link>

      <h1>TOTAL SUM: {totalSum}</h1>
      <h1>TOTAL COUNTERS: {countersList.length}</h1>

      <div>
        {countersList.map((counter, index) => (
          <Counter
            countValue={counter.countValue}
            handleRemove={() => handleCounterRemove(index)}
            handleIncrement={() => handleIncrement(index)}
            handleDecrement={() => handleDecrement(index)}
            handleReset={() => handleReset(index)}
          />

        ))}
      </div>

    </div>
  );
};


export default CountersManagerLayout;
