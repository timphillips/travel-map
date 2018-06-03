import React from "react";
import { InfoWindow, Map, Marker } from "google-maps-react";

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMarker: {},
      selectedLocation: {},
      showingInfoWindow: false
    };
  }

  onMarkerClick(props, marker) {
    this.setState({
      activeMarker: marker,
      showingInfoWindow: true,
      selectedLocation: props.location
    });
  }

  render() {
    const locationMarkers = this.props.locations.map(location => (
      <Marker
        key={location.id}
        title={location.name}
        name={location.name}
        location={location}
        onClick={(props, marker, e) => this.onMarkerClick(props, marker, e)}
        position={{
          lat: location.position.latitude,
          lng: location.position.longitude
        }}
      />
    ));

    let infoWindowContent;
    if (this.state.selectedLocation) {
      infoWindowContent = (
        <h3>
          {this.state.selectedLocation.name},{" "}
          {this.state.selectedLocation.country}
        </h3>
      );
    } else {
      infoWindowContent = <div />;
    }

    const infoWindow = (
      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
      >
        {infoWindowContent}
      </InfoWindow>
    );

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
          {infoWindow}
        </Map>
      </div>
    );
  }
}
