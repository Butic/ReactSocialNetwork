import React from 'react';
import {Route} from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

function App() {

  return (
    
      <div className="App">
        <Header />
        <Nav />
        <div className="Body">
            <Route path='/profile' component={Profile}/>
            <Route path='/dialogs' component={Dialogs}/>
        </div>
      </div>
    
  );
}

export default App;
