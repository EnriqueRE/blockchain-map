import React, { Component } from 'react';
import './App.css';
import { TimeHeader } from './TimeHeader/TimeHeader';
import { Map } from './Map/Map';
import { Timeline } from './Timeline/Timeline';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <div className="col-md-12">
            <TimeHeader />
          </div>{' '}
        </div>{' '}
        <div className="row"></div>{' '}
        <div className="row">
          <div className="col col-sm-12, col-md-6, col-lg-6"> <Timeline/></div>{' '}
          <div className="col col-sm-12, col-md-6, col-lg-6">
            {' '}
            <Map />{' '}
          </div>{' '}
        </div>{' '}
      </div>
    );
  }
}

export default App;
