import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

import { NavbarComponent } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </>
      </Router>
    </div>
  );
}

export default App;
