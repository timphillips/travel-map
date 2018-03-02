import React, { Component } from "react";
import { Map, Marker } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    const locations = this.props.locations;
    const locationMarkers = locations.map(location => (
      <Marker
        key={location.id}
        title={location.name}
        name={location.name}
        position={{
          lat: location.position.latitude,
          lng: location.position.longitude
        }}
      />
    ));

    return (
      <div className="mapContainer">
        <Map
          google={this.props.google}
          zoom={3}
          initialCenter={{
            lat: 35,
            lng: -35
          }}
        >
          {locationMarkers}
        </Map>
      </div>
    );
  }
}
