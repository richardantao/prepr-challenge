import React, { Component } from "react";

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        labs: [],
        markers: []
      }
    }

    componentDidMount() {
      this.setState({
        markers: this.props.labs.map(({ id, latitude, longitude}) => {
          return <Marker key={id} id={id} position={{
            lat: latitude,
            lng: longitude
        }}
        onClick={() => console.log("You clicked me!")} />
        })
      });
    };
    
    render() {
      const { markers } = this.state;
      return (
          <Map
            google={this.props.google}
              zoom={4}
            style={{
                width: '67%',
                height: '100%',
              }}
            initialCenter={{ lat: 37.2976606, lng: 60.3206942}}
          >
            {markers}
          </Map>          
      );
    };
};

export default GoogleApiWrapper({
    apiKey: "AIzaSyDF--eFWTCmRhZLh96nUwBH5W6AQEreXQU"
})(MapContainer);