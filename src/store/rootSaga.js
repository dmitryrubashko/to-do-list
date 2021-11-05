import 'regenerator-runtime/runtime';
import { all } from 'redux-saga/effects';
import getPokemonsWatcher from '../Pages/PokemonsPage/sagas/'
import getPokeDetailsWatcher from '../Pages/PokemonDetailedPage/sagas/'

function* rootSaga() {
  yield all([getPokemonsWatcher(), getPokeDetailsWatcher()]);
}

export default rootSaga;