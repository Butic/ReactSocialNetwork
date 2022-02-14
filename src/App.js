import React from 'react';
import {Route} from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import UsersList from './components/Users/UsersList';
import ProfileContainer from './components/Profile/ProfileContainer';
import { LoginWindowContainer } from './components/LoginWindow/LoginWindowContainer';
import Subscribes from './components/Subscribes/Subscribes';
import Followers from './components/Followers/Followers';
import PhotosContainer from './components/Photo/PhotosContainer';
import SettingsContainer from './components/Settings/SettingsContainer';

function App() {
  return (
      <div className="App">
        <Header />
        <Nav />
        <div className="Body">
            <Route path='/login' render={()=><LoginWindowContainer />}/>
            <Route path='/profile/:userID?' render={()=><ProfileContainer />}/>
            <Route path='/dialogs/:userID?' render={()=><Dialogs />}/>
            <Route path='/photos/:userID?' render={()=><PhotosContainer />}/>
            <Route path='/subscribes' render={()=><Subscribes />}/>
            <Route path='/followers' render={()=><Followers />}/>
            <Route path='/users' render={()=><UsersList />}/>
            <Route path='/settings' render={()=><SettingsContainer />}/>
        </div>
      </div>
  );
};
export default App;
