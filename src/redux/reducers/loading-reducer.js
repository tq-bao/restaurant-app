import { ACTIONS } from '../actions'

const initialState = {
  loading: false,
  content: null
}

function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.LOADING:
      return {
        ...state,
        loading: true,
        content: action.content ?? ''
      }
    case ACTIONS.HIDE_LOADING:
      return {
        ...state,
        loading: false
      }
    default:
      return state;
  }
}

export default {
  loadingReducer
}