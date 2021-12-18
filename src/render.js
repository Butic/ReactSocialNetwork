import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import State from './redux/State'
import {addPost, onPostChange} from './redux/State'

export const renderDom=(props)=>{
  ReactDOM.render(
    <BrowserRouter>
      <App state={State} addPost={addPost} onPostChange={onPostChange}/>
    </BrowserRouter>
    ,
    document.getElementById('root'));
}
