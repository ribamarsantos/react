import React from 'react'
import ReactDOM from 'react-dom'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './main/reducers'
import promise from 'redux-promise'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise)(createStore)(reducers, devTools)

import App from './main/app'

ReactDOM.render( 
    <Provider store={store}>
       <App />
    </Provider>
    ,document.getElementById('app')
)