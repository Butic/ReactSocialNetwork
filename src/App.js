import React from 'react';
import {Route} from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Friends from './components/Friends/Friends';

function App(props) {

  return (
    
      <div className="App">
        <Header />
        <Nav />
        <div className="Body">
            <Route path='/profile' render={()=><Profile profileData={props.state.profileData} dispatch={props.dispatch} />}/>
            <Route path='/dialogs' render={()=><Dialogs dialogData={props.state.dialogData} dispatch={props.dispatch}/>}/>
            <Route path='/friends' render={()=><Friends friendData={props.state.friendData } />}/>
        </div>
      </div>
    
  );
}

export default App;
