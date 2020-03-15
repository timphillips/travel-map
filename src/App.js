import React from "react";
import "./App.css";
import { MapContainer } from "./MapContainer";
import { InfoBox } from "./InfoBox";

export function App({ locations }) {
  return (
    <div className="app">
      <MapContainer locations={locations} google={window.google} />
      <InfoBox />
    </div>
  );
}
