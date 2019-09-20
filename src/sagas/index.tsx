import {put,takeLatest,all} from 'redux-saga/effects'
import {watchRequest} from './detail'
import {watchAddComment} from './addcomment'
function* fetchNews() {
    const json = yield fetch('/api/articlelist.json')
          .then(response => response.json(), );
    yield put({ type: "NEWS_RECEIVED", json: json.articles, });
  }


  function* actionWatcher() {
      yield takeLatest('GET_NEWS',fetchNews)
  }
  export default function* rootSaga() {
     yield all([
     actionWatcher(),watchRequest(),watchAddComment()
     ]);
  }