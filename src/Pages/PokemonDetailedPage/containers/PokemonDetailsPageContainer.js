
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {useCallback, useEffect} from "react";
import {GET_POKEMON_DETAILS_REQUEST} from '../actions'

const PokemonDetailsPageContainer = () => {
  const dispatch = useDispatch();

  const {info} = useSelector(state => state.pokemonDetails)

  const {name} = useParams();

  useEffect(()=> {
    dispatch(GET_POKEMON_DETAILS_REQUEST(name))
  },[name])
  return (
    <div>
      <h1>Details</h1>
      <h2>Hello I am - {info.name} - {info.base_experience}</h2>
    </div>
  );
};

export default PokemonDetailsPageContainer;

