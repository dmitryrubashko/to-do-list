import {useCallback, useState} from "react";
import CountersManagerLayout from "../Components/CountersManagerLayout";


const CountersManagerContainer = () => {
  const [countersList, setCountersList] = useState([]);

  const handleCounterCreate = useCallback(() => {
    const newCounter = {
      countValue: 0
    };

    setCountersList(state => {
      const updatedCounter = state.map(({countValue}) => ({
        countValue: countValue % 2 === 0 ? countValue + 1 : countValue
      }))
      return [...updatedCounter, newCounter]
    })
  }, [countersList])

  const handleCounterRemove = useCallback((index) => {
    setCountersList(state => {
      const copy = [...state];

      copy.splice(index, 1);
      return copy.map(({countValue}) => ({
        countValue: countValue % 2 !==0 ? countValue -1 : countValue
      }))
    })

  }, [])

  const handleIncrement = useCallback((counterIndex) => {
    setCountersList(state => {
      return state.map((counter, index) => ({
        countValue: counterIndex === index ? counter.countValue + 1 : counter.countValue
      }))

    })
  }, [])

  const handleReset = useCallback((counterIndex) => {
    setCountersList(state => {
      return state.map((counter, index) => ({
        countValue: counterIndex === index ? 0 : counter.countValue
      }))

    })
  }, [])

  const handleDecrement = useCallback((counterIndex) => {
    if (countersList[counterIndex].countValue >= 1) {
      setCountersList(state => {
        return state.map((counter, index) => ({
          countValue: counterIndex === index ? counter.countValue - 1 : counter.countValue
        }))

      })
    }

  }, [countersList])

  const handleCountersListClear = useCallback(() => {
    setCountersList([])
  }, [])

  return<CountersManagerLayout
    countersList={countersList}
    handleCounterCreate={handleCounterCreate}
    handleCounterRemove={handleCounterRemove}
    handleIncrement = {handleIncrement}
    handleDecrement = {handleDecrement}
    handleCountersListClear = {handleCountersListClear}
    handleReset = {handleReset}
  />;
};

export default CountersManagerContainer;
