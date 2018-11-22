import React, { Component } from 'react';
import './Map.css';
//AIzaSyB4zh7f42nXFEssbWNqFsVVoRaaxpoF0Jk

export class Map extends Component {
  constructor(props) {
    super(props);
    this.renderMap();
  }

  componentDidMount() {}

  renderMap() {
    window.initMap = this.initMap;
  }

  initMap() {
    const google = window.google;

    // Create A Map
    var map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 37.4852152, lng: -122.2363548 },
      zoom: 12,
      styles: [
        { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#d59563' }]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#d59563' }]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{ color: '#263c3f' }]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#6b9a76' }]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{ color: '#38414e' }]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#212a37' }]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#9ca5b3' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{ color: '#746855' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#1f2835' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#f3d19c' }]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{ color: '#2f3948' }]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#d59563' }]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#17263c' }]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#515c6d' }]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{ color: '#17263c' }]
        }
      ]
    });

    let placeIcon = {
      path:
        'M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z',
      fillColor: '#5B9BD5',
      fillOpacity: 1,
      scale: 0.05,
      strokeColor: 'white',
      strokeWeight: 1,
      labelOrigin: { x: 80, y: -200 }
    };


    
    // creating markers
    let vision = new google.maps.Marker({
      position: { lat: 37.528581, lng: -122.264635 },
      map:map,
      title: 'testy test',
      animation: google.maps.Animation.DROP,
      Icon: placeIcon,
      label: {
        text: 'Vision',
        color: 'white',
        fontWeight: '500'
      }
    });

    let alphaChem =  new google.maps.Marker({
      position: { lat: 37.427475, lng: -122.169719 },
      map: map,
      title: 'testy test',
      animation: google.maps.Animation.DROP,
      Icon: placeIcon,
      label: {
        text: 'Alpha Chemicals',
        color: 'white',
        fontWeight: '500'
      }
    });

    let deltaChem =  new google.maps.Marker({
      position: { lat: 37.464660, lng: -122.268023 },
      map: map,
      title: 'testy test',
      animation: google.maps.Animation.DROP,
      Icon: placeIcon,
      label: {
        text: 'Delta Chemicals',
        color: 'white',
        fontWeight: '500'
      }
    });

    let batteryPro =  new google.maps.Marker({
      position: { lat: 37.484610, lng: -122.149504 },
      map: map,
      title: 'Battery Producer',
      animation: google.maps.Animation.DROP,
      Icon: placeIcon,
      label: {
        text: 'Battery Producer',
        color: 'white',
        fontWeight: '500'
      }
    });

    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer(
      {suppressMarkers:true,
      polylineOptions:{
        strokeColor:'#E85F88'
      }});

    directionsDisplay.setMap(map);
    let markers = [vision,alphaChem,deltaChem, batteryPro];
    let waypoints = markers.map(waypoint=>{
      return {
        location: waypoint.position,stopover:true
      }
    });

    directionsService.route(
      {
        origin:vision.position,
        destination: deltaChem.position,
        travelMode: 'DRIVING',
        waypoints:waypoints,
        optimizeWaypoints: true,
        
      },(res, status)=>{
        if (status === 'OK') {
          directionsDisplay.setDirections(res);
      }else{
        console.log('directions failed');
      }}
    );
  
  }

  render() {
    this.renderMap();
    return (
      <div>
        <div id="map" />
      </div>
    );
  }
}
