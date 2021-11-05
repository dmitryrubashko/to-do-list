import PokemonPageLayout from "../components/PokemonLayout";
import {useDispatch, useSelector} from 'react-redux'
import {useCallback, useEffect} from "react";
import { GET_POKEMONS_REQUEST } from '../actions'
import {useHistory} from "react-router-dom";

const PokemonPageContainer = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const {list, isLoading, error} = useSelector(state => state.pokemonsPage)

  const handleGoToDetails = useCallback((pokemonName) => {
    history.push(`/pokemon/${pokemonName}`)
  },[]);

  useEffect(() => {
    dispatch(GET_POKEMONS_REQUEST())
  },[]);
  return <PokemonPageLayout list={list} isLoading={isLoading} handleGoToDetails={handleGoToDetails}/>;
};

export default PokemonPageContainer;
