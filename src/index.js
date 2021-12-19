import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import State, {addPost, onPostChange, renderDom} from './redux/State'

export const renderD=()=>{
  ReactDOM.render(
    <BrowserRouter>
      <App state={State} addPost={addPost} onPostChange={onPostChange}/>
    </BrowserRouter>
    ,
    document.getElementById('root'));
}

renderDom(renderD);
