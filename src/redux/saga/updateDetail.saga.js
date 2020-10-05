import { put } from 'redux-saga/effects';
import axios from 'axios';

// updates detail for renaming the title and description
function* updateDetail(action) {
  console.log('hit updateDetail and here is my action', action);
  yield axios({
    method: 'PUT',
    url: action.url,
    data: action.payload
  });
  yield put({
    type: 'FETCH_DETAIL'
  });
}

export default updateDetail;