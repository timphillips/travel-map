import React from "react";
import { InfoWindow, Map, Marker } from "google-maps-react";

export function MapContainer({ locations, google }) {
  const [activeMarker, setActiveMarker] = React.useState();
  const [selectedLocation, setSelectedLocation] = React.useState();

  const locationMarkers = React.useMemo(
    () =>
      locations.map(location => (
        <Marker
          key={location.id}
          title={location.name}
          name={location.name}
          location={location}
          onClick={(props, marker, e) => {
            setActiveMarker(marker);
            setSelectedLocation(props.location);
          }}
          position={{
            lat: location.position.latitude,
            lng: location.position.longitude
          }}
        />
      )),
    [locations]
  );

  return (
    <div className="mapContainer">
      <Map
        google={google}
        zoom={3}
        initialCenter={{
          lat: 35,
          lng: -35
        }}
        mapTypeControl={false}
      >
        {locationMarkers}
        <InfoWindow marker={activeMarker} visible>
          <h3>
            {selectedLocation &&
              `${selectedLocation.name}, ${selectedLocation.country}`}
          </h3>
        </InfoWindow>
      </Map>
    </div>
  );
}
