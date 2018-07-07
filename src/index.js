import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {combineReducers,createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
// import ReduxPromise from 'redux-promise';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


const mathReducer = (state = {
  result : 1,
  lastValues: []
}, action) => {
  switch (action.type) {
    case "ADD":
      state = {
          ...state,
        result: state.result + action.payload,
        lastValue: [...state.lastValues, action.payload]
      };
      break;
  }
  return state
};

const userReducer = (state = {
  name: "Max",
  age: 27
}, action) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload
      };
      break;
    case "SET_AGE":
      state = {
        ...state,
        age: action.payload
      };
      break;
  }
  return state;
};

const store = createStore(combineReducers({math: mathReducer, user: userReducer}), {}, applyMiddleware(logger));


ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
