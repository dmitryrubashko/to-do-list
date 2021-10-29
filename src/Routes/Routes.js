import {Switch, Route, Redirect} from "react-router-dom";

import homePage from "../Pages/Home";
import FunctionalCounterContainer from "../Pages/FunctionalCounter/Containers/FunctionalCounterContainer";
import ReduxCounterContainer from "../Pages/ReduxCounterPage/containers/ReduxCounterContainer";
import UsersPageContainer from "../Pages/UsersPage/Containers/UsersPageContainer";
import CountersManagerContainer from "../Pages/CountersManager/Containers/CountersManagerContainer";
import FormPageContainer from "../Pages/FormPage/Container/FormPageContainer";

import {ROUTES} from "./routeNames";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={homePage}/>
      {/*<Route path={ROUTES.COUNTER_PAGE} component={CounterPageContainer}/>*/}
      <Route path={ROUTES.USERS_PAGE} component={UsersPageContainer}/>
      <Route path={ROUTES.FUNCTIONAL_COUNTER} component={FunctionalCounterContainer}/>
      <Route path={ROUTES.COUNTERS_MANAGER} component={CountersManagerContainer}/>
      <Route path={ROUTES.REDUX_COUNTER} component={ReduxCounterContainer}/>
      <Route path={ROUTES.FORM} component={FormPageContainer}/>
      <Redirect path='*' to={ROUTES.HOME}/>
    </Switch>
  );
};

export default Routes;
