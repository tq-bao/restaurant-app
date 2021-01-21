import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './root-saga';
import combineReducer from './combine-reducer'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(combineReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
