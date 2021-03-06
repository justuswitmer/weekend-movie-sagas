import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import AddMovie from '../AddMovie/AddMovie';
import Details from '../Details/Details';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import './App.css';
import Admin from '../Admin/Admin';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <nav>
            <main className='mainDiv'>
              <li id='navli1'><Link to="/">Home</Link></li>
              <li id='navli2'><Link to="/addmovie">Add Movie</Link></li>
              <li id='navli3'><a href="http://www.google.com">Google</a></li>
              <li id='navliAdmin'><Link to="/admin">Admin</Link></li>
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
