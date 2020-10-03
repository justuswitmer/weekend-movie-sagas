import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import AddMovie from '../AddMovie/AddMovie';
import Details from '../Details/Details';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import './App.css';
import { Button } from '@material-ui/core';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <nav>
            <main>
              <Button variant="contained" class='navBtn'><Link to="/">Home</Link></Button>
              <Button variant="contained" class='navBtn'><Link to="/addmovie">Add Movie</Link></Button>
              <Button variant="contained" class='navBtn'><a href="http://www.google.com">Google</a></Button>
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
          <Footer />
        </div >
      </Router>
    );
  }
}

export default App;
