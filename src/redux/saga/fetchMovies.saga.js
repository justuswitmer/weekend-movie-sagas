import { put } from 'redux-saga/effects';
import axios from 'axios';

// generator sending GET to movie.router
function* fetchMovies(action) {
  console.log('hit fetchMovies', action);
  let response = yield axios({
    method: 'GET',
    url: '/api/movie'
  });
  yield put({
    type: 'SET_MOVIES',
    payload: response.data
  });
}

export default fetchMovies;