import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <header className="App-header">
        <div className = "NavBar">
          <p className = "nav-item nav-name">
            Jake Magid
          </p>
          <Link className="nav-item nav-last" to="/contact">
            <button className="nav-link">contact</button>
          </Link>
          <Link className="nav-item" to="/about">
            <button className="nav-link">about</button>
          </Link>
          <Link className="nav-item" to="/">
            <button className="nav-link">home</button>
          </Link>
        </div>
      </header>
    )
  }
}


export default NavBar;
