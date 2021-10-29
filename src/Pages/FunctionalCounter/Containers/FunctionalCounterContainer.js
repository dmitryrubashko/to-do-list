import FunctionalCounterLayout from "../Components/Layout";
import {useCounter} from "../../../Hooks";

const FunctionalCounterContainer = () => {
  const [count, increment, decrement, reset] = useCounter(0);

  return (
    <FunctionalCounterLayout
      countValue = {count}
      handleIncrement = {increment}
      handleDecrement = {decrement}
      handleReset = {reset}
    />
  );
};

export default FunctionalCounterContainer;
