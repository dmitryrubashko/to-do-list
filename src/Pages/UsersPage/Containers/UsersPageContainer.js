import React, {useState, useCallback, useEffect} from 'react';
import UsersPageLayout from "../Components/Layout";
import axios from 'axios';
import {useFetching} from "../../../Hooks";

const getPokemons = () => axios.get('https://pokeapi.co/api/v2/pokemon')

const UsersPageContainer = () => {
  const {responseData, error, isLoading, handleDataLoad} = useFetching(getPokemons);

  useEffect(() => {
    handleDataLoad()
  },[])

  return <UsersPageLayout
    userList={responseData?.results}
    title ='Requests'
    isLoading={isLoading}
  />
};

export default UsersPageContainer;