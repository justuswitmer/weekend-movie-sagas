import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className='headerDiv'>
        <header>
          <h1>Welcome to the Movies!</h1>
        </header>
      </div>
    )
  }
}

export default (Header);