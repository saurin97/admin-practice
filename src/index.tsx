import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root';
import { Provider}  from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import thunk from 'redux-thunk';
import reducer from './store/reducer'


const store = createStore(reducer , applyMiddleware(thunk))

const app = (
  <Provider store ={store}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
  </Provider>
)

ReactDOM.render(app,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
