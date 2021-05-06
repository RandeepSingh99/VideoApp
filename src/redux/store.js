import {createStore,compose,applyMiddleware} from 'redux';
import rootReaducer from './reducer/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/index';

const sagaMiddleware = createSagaMiddleware();
const store = compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension && window.devToolsExtension(),
    )(createStore)(rootReaducer);
sagaMiddleware.run(rootSaga);
export default store;