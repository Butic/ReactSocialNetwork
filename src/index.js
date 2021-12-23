import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/reduxStore'
import {Provider} from 'react-redux';

export const renderDom=()=>{
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
       <App />
      </Provider>
    </BrowserRouter>
    ,
    document.getElementById('root'));
}

renderDom(store.getState());
store.subscribe(()=>{
  renderDom(store.getState());
});