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
            zoom={8}
            style={{
                width: '100%',
                height: '100%',
              }}
            initialCenter={{ lat: 43.560501, lng: -79.709709}}
          >
            {markers}
          </Map>
      );
    };
};

export default GoogleApiWrapper({
    apiKey: "AIzaSyDF--eFWTCmRhZLh96nUwBH5W6AQEreXQU"
})(MapContainer);