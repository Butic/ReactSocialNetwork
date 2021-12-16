import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

const lorem = 'dolor sit amet consectetur adipisicing elit. Minima accusantium maxime magni atque deserunt? Doloribus unde dolores, molestias, suscipit enim molestiae dignissimos dolorum quidem aliquid soluta incidunt officiis dolor nihil.';

const postData = [
  {number:'5', title:'JS', text: lorem, likes:411},
  {number:'4', title:'React', text: lorem+lorem, likes:19142},
  {number:'3', title:'HTML', text: lorem+lorem+lorem, likes:51},
  {number:'2', title:'CSS', text: lorem, likes:1084},
  {number:'1', title:'NodeJS', text: lorem+lorem, likes:132},
];
const messagesData = [
  {id:1, me:true, message:lorem},
  {id:1, me:false, message:lorem+lorem},
  {id:1, me:true, message:lorem+lorem},
  {id:1, me:true, message:lorem+lorem+lorem},
  {id:1, me:false, message:lorem+lorem},
  {id:1, me:false, message:lorem+lorem},
  {id:1, me:true, message:lorem+lorem},
  {id:1, me:false, message:lorem+lorem+lorem},
  {id:1, me:true, message:lorem+lorem},
  {id:1, me:false, message:lorem+lorem}
];
const dialogData = [
  {id:1, name:'Andrew'},
  {id:2, name:'Alena'},
  {id:3, name:'Dimas'},
  {id:4, name:'Artem'},
  {id:5, name:'Elena'},
  {id:6, name:'Alexey'},
  {id:7, name:'Yurok'}
];

ReactDOM.render(
  <BrowserRouter>
    <App postData={postData} messagesData={messagesData} dialogData={dialogData}/>
  </BrowserRouter>
  ,
  document.getElementById('root'));