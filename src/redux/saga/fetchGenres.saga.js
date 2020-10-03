import { put } from 'redux-saga/effects';
import axios from 'axios';

// generator sending GET to genre.router
function* fetchGenres(action) {
  console.log('hit fetchGenres');
  let response = yield axios({
    method: 'GET',
    url: '/api/genre'
  });
  yield put({
    type: 'SET_GENRES',
    payload: response.data
  });
}

export default fetchGenres;