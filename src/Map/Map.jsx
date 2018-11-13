import React, {Component} from 'react';
import mapIcon from './map.png';

export class Map extends Component {

  render(){
    return(
      <div className="col">
        <img height="100%" width="auto" src={mapIcon} alt="map"/>
      </div>
    );
  }

}