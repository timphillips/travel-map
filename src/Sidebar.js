import React, { Component } from "react";

export class Sidebar extends Component {
  render() {
    const locations = this.props.locations;
    const countries = Array.from(
      new Set(
        locations
          .filter(location => location.country)
          .map(location => location.country)
      )
    );

    const locationListItems = locations
      .sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      })
      .map(location => (
        <li key={location.id}>
          {location.name}
          {location.country ? `, ${location.country}` : ""}
        </li>
      ));

    const countryListItems = countries
      .sort()
      .map(country => <li key={country}>{country}</li>);

    return (
      <aside className="sidebar">
        <h3 className="sidebar__header">Travel Map</h3>
        <ul>{locationListItems}</ul>
        <ul>{countryListItems}</ul>
      </aside>
    );
  }
}
