import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import AddMovie from '../AddMovie/AddMovie';
import Details from '../Details/Details';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import './App.css';
import { Button } from '@material-ui/core';
import Admin from '../Admin/Admin';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <nav>
            <main>
              <div className='linkDiv'>
                <li class='navBtn'><Link to="/">Home</Link></li>
                <li class='navBtn'><Link to="/addmovie">Add Movie</Link></li>
                <li class='navBtn'><a href="http://www.google.com">Google</a></li>
              </div>
              <div className='adminDiv'>
                <Button class='navBtnAdmin'><Link to="/admin">Admin</Link></Button>
              </div>
            </main>
          </nav>
          <Route path='/admin'>
            <Admin />
          </Route>
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
