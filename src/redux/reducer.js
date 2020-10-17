import { combineReducers } from 'redux'
import fetchPostReducer from './redux/fetchPostReducer'

const rootReducer = combineReducers({
  fetchPostReducer,
})
export default rootReducer
