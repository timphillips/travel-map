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
        country: country || null,
        year: this.state.filters.year
      }
    });
  }

  onYearChanged(year) {
    this.setState({
      filters: {
        country: this.state.filters.country,
        year: year || null
      }
    });
  }

  render() {
    return (
      <div className="app">
        <Sidebar
          locations={this.props.locations}
          onCountryChanged={country => this.onCountryChanged(country)}
          onYearChanged={year => this.onYearChanged(year)} />
        <MapContainer
          locations={this.props.locations}
          filters={this.state.filters}
          google={window.google}
        />
      </div>);
  }
};
