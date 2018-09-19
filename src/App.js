import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About'
import Navbar from './components/navbar/CustomNavbar'
import News from './components/news/News'

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/news" component={News} />
            </div>
        </Router>
    );
  }
}

export default App;
