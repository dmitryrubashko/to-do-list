import {takeEvery, put, call} from 'redux-saga/effects';
import * as actions from '../actions';
import {getPokemonDetail} from '../api'


function* getPokeDetailsWorker({payload}) {
    try {
    const response = yield call(getPokemonDetail, payload)
    yield put (actions.GET_POKEMON_DETAILS_SUCCESS(response.data))
    } catch (error) {
    yield put (actions.GET_POKEMON_DETAILS_FAIL(error.message))
    }
}

function* getPokeDetailsWatcher() {
    yield takeEvery(actions.GET_POKEMON_DETAILS_REQUEST, getPokeDetailsWorker)
}

export default getPokeDetailsWatcher