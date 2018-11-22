import React, { Component } from 'react';
import './App.css';
import { TimeHeader } from './TimeHeader/TimeHeader';
import { Map } from './Map/Map';
import { Timeline } from './Timeline/Timeline';

class App extends Component {

  render() {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyB4zh7f42nXFEssbWNqFsVVoRaaxpoF0Jk&callback=initMap");
    return (
      <div className="App container">
        <div className="row">
          <div className="col-md-12">
            <TimeHeader />
          </div>{' '}
        </div>{' '}
        <div className="row"> </div>{' '}
        <div className="row">
          <div className="col col-sm-12, col-md-6, col-lg-6">
            {' '}
            <Timeline />{' '}
          </div>{' '}
          <div className="col col-sm-12, col-md-6, col-lg-6"> 
          <Map />
          </div> 
        </div>{' '}
      </div>
    );
  }

}

function loadScript(url) {
  var index  = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default App;
