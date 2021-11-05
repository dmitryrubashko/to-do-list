import api from '../../../http'

export const getPokemonDetail = (name) => api.get(`pokemon/${name}`);