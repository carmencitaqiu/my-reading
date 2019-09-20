import { put,takeLatest} from 'redux-saga/effects';
import * as types from '../constants/actionTypes';

function* addComment(comm:any) {
    const json = yield fetch('/api/addcomment.json')
          .then(response => response.json(), );
    yield put({ type: "ARTICLE_DETAIL_RECEIVED", json: json.articleDetail, });
  }

export function* watchAddComment() {
    yield takeLatest(types.ADD_COMMENT,addComment)
}