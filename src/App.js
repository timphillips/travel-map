import React, { Component } from "react";
import "./App.css";
import { Map } from "./Map";
import { Sidebar } from "./Sidebar";

const locations = require("./locations.json");

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: locations
    };
  }

  render() {
    return (
      <div className="app">
        <Sidebar locations={this.state.locations} />
        <Map locations={this.state.locations} />
      </div>
    );
  }
}
