import React, { Component } from "react";
import "./App.css";
import { Map } from "./Map";
import { Sidebar } from "./Sidebar";

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar locations={this.props.locations} />
        <Map locations={this.props.locations} />
      </div>
    );
  }
}
