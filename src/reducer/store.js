import { createStore } from 'redux'
import { install } from 'redux-loop'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '.'

export default initialState => createStore(rootReducer, composeWithDevTools(install()))
