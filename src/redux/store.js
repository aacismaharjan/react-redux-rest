import { applyMiddleware, createStore, compose } from 'redux'
import rootReducer from './reducer'
import ReduxThunk from 'redux-thunk'

const store = compose(
  applyMiddleware(ReduxThunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(rootReducer)

export default store
