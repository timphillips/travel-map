import React from "react";
import { Map, Marker } from "google-maps-react";

export function MapContainer(props) {
  const locationMarkers = props.locations.map(location => (
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
        google={props.google}
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
