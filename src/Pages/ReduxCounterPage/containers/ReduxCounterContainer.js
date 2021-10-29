import ReduxCounterLayout from "../components/ReduxCounterLayout";
import {useDispatch, useSelector} from "react-redux";
import {CREATE_COUNTER, INCREASE_COUNTER} from "../actions";
import {useCallback} from "react";

const ReduxCounterContainer = () => {

  const dispatch = useDispatch();
  const {counters} = useSelector((store) => store.countersPage )

  const handleCounterCreate = useCallback(() => {
    dispatch(CREATE_COUNTER())
  }, [dispatch])

  const handleIncrement = useCallback((id) => {
    dispatch(INCREASE_COUNTER(id))
  }, [])

  return (
    <ReduxCounterLayout
      handleCounterCreate={handleCounterCreate}
      counters={counters}
      handleIncrement={handleIncrement}
    />
  );
};

export default ReduxCounterContainer;
