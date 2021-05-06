import { call, put, takeEvery } from 'redux-saga/effects';
const apiUrl = "https://demo7242716.mockable.io/videos";
function getApi() {
    return fetch(apiUrl)
        .then(res => res.json())
        .catch((err) => { throw err; });
    };
    function* fetchVideos() {
        try {
            const videos = yield call(getApi)
        yield put({ type: 'GET_MOVIE_SUCCESS', videos: videos })
    } catch (e) {
        yield put({ type: 'GET_MOVIE_FAILED', message: e.message })
    }
}
function* movieSaga(){
    yield takeEvery('GET_MOVIE_REQUSTED',fetchVideos)
    
}
export default movieSaga;