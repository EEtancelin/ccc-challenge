import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { reducer as formReducer } from 'redux-form'

import App from './components/app';
const cccContainer = document.getElementById('ccc_app');

// Import Initial state
import { characters } from './initial_state.js';
// debugger;

const initialState = {
  characters: characters,
  form:{},
};

const reducers = combineReducers({
  characters: (state = null, action) => state,
  form: formReducer,
});

const middlewares = applyMiddleware(logger, ReduxPromise);
const store = createStore(reducers, initialState, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  cccContainer
);
