import React, { Component } from 'react';
import mapIcon from './map.png';

export class StaticMap extends Component{
  render(){
    return(
      <div className="col">
        <img src={mapIcon} alt="map" height="550x" width="auto"/>
      </div>
    );
  }
}