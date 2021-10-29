import {ROUTES} from "../../../../Routes/routeNames";
import styles from './styles.module.scss'
import {Link} from "react-router-dom";
import Counter from "../../../../commonComponents/Counter";

const FunctionalCounterLayout = ({countValue, handleDecrement, handleIncrement, handleReset}) => {
  return (
    <>
      <div className={styles.buttons}>
        <Link to={ROUTES.HOME}>
          <button className={styles.button}>Home Page</button>
        </Link>
      </div>
      <h1>Functional Counter</h1>

      <Counter countValue={countValue}
               handleIncrement={handleIncrement}
               handleDecrement={handleDecrement}
               handleReset={handleReset}
      />
      </>
  );
};

export default FunctionalCounterLayout;
