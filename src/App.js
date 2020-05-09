import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Register} />
          <Route path="/register" component={Login} />
        </div>
      </Router>
    </div>
  );
}

export default App;
