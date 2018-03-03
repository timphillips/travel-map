import React from "react";
import "./App.css";
import { MapContainer } from "./MapContainer";
import { Sidebar } from "./Sidebar";

export const App = ({ locations }) => (
  <div className="app">
    <Sidebar locations={locations} />
    <MapContainer locations={locations} google={window.google} />
  </div>
);
