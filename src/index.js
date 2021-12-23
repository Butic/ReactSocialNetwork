import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/reduxStore'
import StoreContext from './redux/StoreContext';

export const renderDom=(state)=>{
  ReactDOM.render(
    <BrowserRouter>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
    </BrowserRouter>
    ,
    document.getElementById('root'));
}

renderDom(store.getState());
store.subscribe(()=>{
  renderDom(store.getState());
});