import React, { Component } from 'react';
import Header from './Header';
import Videos from './Videos';
import './App.css';
import Table from './Table';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />
        <Videos />
        {/* <Table /> */}
      </div>
    );
  }
}

export default App;
