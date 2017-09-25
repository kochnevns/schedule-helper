import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware  } from 'redux'
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux'
import reducer from './reducers/'
import App from './App.jsx'

const store = createStore(reducer, applyMiddleware(thunkMiddleware ));
store.subscribe(function() {
  console.log(store.getState())
})
render(
  <Provider store={store}><App/></Provider>,
  document.getElementById('app')
)
