import React, { Component } from 'react';
import Header from './components/Header';
import Videos from './components/Videos';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Videos />
        
      </div>
    );
  }
}

export default App;
