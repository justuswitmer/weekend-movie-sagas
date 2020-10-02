import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import AddMovie from '../AddMovie/AddMovie';
import Details from '../Details/Details';
import Header from '../Header/Header';
import Home from '../Home/Home';
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <nav>
            <main>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/addmovie">Add Movie</Link></li>
              <li><a href="http://www.google.com">Google</a></li>
            </main>
          </nav>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/addmovie">
            <AddMovie />
          </Route>
        </div >
      </Router>
    );
  }
}

export default App;
