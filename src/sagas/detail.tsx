import { put,takeLatest} from 'redux-saga/effects';
import * as types from '../constants/actionTypes';

function* requestDetail() {
    const json = yield fetch('/api/articdetail.json')
          .then(response => response.json(), );
    yield put({ type: "ARTICLE_DETAIL_RECEIVED", json: json.articleDetail, });
  }

export function* watchRequest() {
    yield takeLatest(types.GET_ARTICLEDETAIL,requestDetail)
}