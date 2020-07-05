import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Music from './components/Music';

import { NavbarComponent } from './components/Navbar';
import Artist from './components/Artist/Artist';
import ProtectedRoute from './components/ProtectedRoute';
import CreatePlaylist from './components/CustomPlaylists/CreatePlaylist';
import AllPlaylists from './components/CustomPlaylists/AllPlaylists';
import PlaylistDetails from './components/CustomPlaylists/PlaylistDetails';
import PlayAlbum from './components/PlayAlbum';

import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <>
          <Route exact path="/" component={Music} />
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/createPlaylist">
            <CreatePlaylist />
          </ProtectedRoute>
          <ProtectedRoute exact path="/playlists" >
            <AllPlaylists />
          </ProtectedRoute>
          <Route path={`/playlists/:id`} component={PlaylistDetails} />
          <Route path={`/album/:id`} component={PlayAlbum} />
          <Route path="/artist/:id" component={Artist} />
        </>
      </Router>
    </div>
  );
}

export default App;
