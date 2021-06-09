import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Videos from '../components/Videos/Videos';
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
