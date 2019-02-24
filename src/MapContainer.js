import React from "react";
import { InfoWindow, Map, Marker } from "google-maps-react";

function filterLocationByYear(location, year) {
  if (!year) {
    return true;
  }
  if (location.events && year) {
    for (const event of location.events) {
      if (event.year && event.year.toString() === year.toString()) {
        return true;
      }
    }
  }
  return false;
}

function filterLocationByCountry(location, country) {
  if (!country) {
    return true;
  }
  return location.country === country;
}

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
    const filterLocation = location =>
      filterLocationByYear(location, this.props.filters.year) &&
      filterLocationByCountry(location, this.props.filters.country);

    const filteredLocations =
      this.props.filters.year || this.props.filters.country
        ? this.props.locations.filter(filterLocation)
        : this.props.locations;

    const locationMarkers = filteredLocations.map(location => (
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

    const infoWindowContent = this.state.selectedLocation ? (
      <h3>
        {this.state.selectedLocation.name},{" "}
        {this.state.selectedLocation.country}
      </h3>
    ) : (
      <div />
    );

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
          mapTypeControl={false}
        >
          {locationMarkers}
          {infoWindow}
        </Map>
      </div>
    );
  }
}
