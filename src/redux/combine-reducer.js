import { combineReducers } from 'redux';
import loadingReducer from './reducers/loading-reducer'

export default combineReducers({
  ...loadingReducer
})