import React from "react";
import "./App.css";
import { MapContainer } from "./MapContainer";
import { Sidebar } from "./Sidebar";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        year: null,
        country: null
      }
    };
  }

  onCountryChanged(country) {
    this.setState({
      filters: {
        ...this.state.filters,
        country: country || null
      }
    });
  }

  onYearChanged(year) {
    this.setState({
      filters: {
        ...this.state.filters,
        year: year || null
      }
    });
  }

  render() {
    return (
      <div className="app">
        <Sidebar
          filters={this.state.filters}
          locations={this.props.locations}
          onCountryChanged={country => this.onCountryChanged(country)}
          onYearChanged={year => this.onYearChanged(year)}
        />
        <MapContainer
          locations={this.props.locations}
          filters={this.state.filters}
          google={window.google}
        />
      </div>
    );
  }
}
