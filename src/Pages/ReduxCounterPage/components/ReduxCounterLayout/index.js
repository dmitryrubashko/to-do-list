import {Button} from "@mui/material";
import Counter from "../../../../commonComponents/Counter";
import {ROUTES} from "../../../../Routes/routeNames";
import styles from "../../../FunctionalCounter/Components/Layout/styles.module.scss";
import {Link} from "react-router-dom";


const ReduxCounterLayout = ({counters, handleCounterCreate, handleIncrement, index}) => {
  return (
    <div>
      <Button variant={'outlined'} onClick={handleCounterCreate}>Create Counter</Button>
      <Link to={ROUTES.HOME}>
        <button className={styles.button}>Home Page</button>
      </Link>
      <div>
        {counters.map(({id, countValue}) => (
          <Counter
            key={id}
            countValue={countValue}
            id={id}
            handleIncrement={handleIncrement}/>
          ))}
      </div>
    </div>
  );
};

export default ReduxCounterLayout;
