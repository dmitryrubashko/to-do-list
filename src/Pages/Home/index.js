import React from 'react';

import {ROUTES} from "../../Routes/routeNames";
import {Link} from "react-router-dom";
import styles from './styles.module.scss'

const homePage = () => {
  return (
    < >
    {/*<Link to={ROUTES.COUNTER_PAGE}>*/}
    {/*  <button className={styles.button}>Counter Pаge</button>*/}
    {/*</Link>*/}
    <div className={styles.buttons}>
      <Link to={ROUTES.FUNCTIONAL_COUNTER}>
        <button className={styles.button}>Simple Counter</button>
      </Link>

      <Link to={ROUTES.COUNTERS_MANAGER}>
        <button className={styles.button}>Counters Manager</button>
      </Link>

      <Link to={ROUTES.REDUX_COUNTER}>
        <button className={styles.button}>Redux Counter</button>
      </Link>

      <Link to={ROUTES.FORM}>
        <button className={styles.button}>Form</button>
      </Link>
    </div>
      <h1>Home Page</h1>
    </>
  );
};

export default homePage;
