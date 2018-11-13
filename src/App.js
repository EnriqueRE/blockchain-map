import React, { Component } from 'react';
import './App.css';
import { TimeHeader } from './TimeHeader/TimeHeader';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <div className="col-md-12">
            <TimeHeader />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">app and stuff</div>
        </div>
      </div>
    );
  }
}

export default App;
