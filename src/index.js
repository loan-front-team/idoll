import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App.jsx';
import reducer from 'reduxes/reducer.jsx';
import './index.css';

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f;
const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  reduxDevtools
));

if (process.env.NODE_ENV !== 'production') {
   console.log(process.env.NODE_ENV);
 }

ReactDOM.render(
	(
  <Provider store={store} style={{height: '100%'}}>
    <App />
  </Provider>
	),
  document.getElementById('root'));
