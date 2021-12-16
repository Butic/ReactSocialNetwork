import React from 'react';
import {Route} from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

function App(props) {

  return (
    
      <div className="App">
        <Header />
        <Nav />
        <div className="Body">
            <Route path='/profile' render={()=><Profile postData={props.postData} />}/>
            <Route path='/dialogs' render={()=><Dialogs messagesData={props.messagesData} dialogData={props.dialogData}/>}/>
        </div>
      </div>
    
  );
}

export default App;
