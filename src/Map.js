import React, { Component } from "react";

export class Map extends Component {
  componentDidMount() {
    const locations = this.props.locations;
    this.map = new window.google.maps.Map(this.refs.map, {
      center: { lat: 35.850837, lng: -41.082645 },
      zoom: 3
    });
    locations.forEach(location => {
      new window.google.maps.Marker({
        position: {
          lat: location.position.latitude,
          lng: location.position.longitude
        },
        map: this.map
      });
    });
  }

  render() {
    return <div className="map" ref="map" />;
  }
}
