import { applyMiddleware, createStore, compose } from 'redux'
import rootReducer from './reducer'
import ReduxThunk from 'redux-thunk'

const isInDev = false
const composeEnhancers =
  (isInDev &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk))
)

export default store
