import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/reduxStore'

export const renderDom=(state)=>{
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>
    ,
    document.getElementById('root'));
}

renderDom(store.getState());
store.subscribe(()=>{
  renderDom(store.getState());
});