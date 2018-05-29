import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import About from './components/About.js'
import './App.css';


const Contact = () => (
  <div className="About section">
      <h1>Hit me up!</h1>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
