import { put } from 'redux-saga/effects';
import axios from 'axios';

// generator sending detail from movie that was clicked
function* fetchDetail(action) {
  console.log('hit fetchDetail', action.url);
  let response = yield axios({
    method: 'GET',
    url: action.url
  });
  yield put({
    type: 'SET_DETAIL',
    payload: response.data
  });
}

export default fetchDetail;