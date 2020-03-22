import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers/reducers'

const initialState = {}
const enhancers = []

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(thunk),
    ...enhancers
)

const store = createStore(
    combineReducers(reducers),
    initialState,
    composedEnhancers
)

export default store
