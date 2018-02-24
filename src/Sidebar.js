import React, { Component } from "react";
import { ExpandableList } from "./ExpandableList";

function compareStrings(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

export class Sidebar extends Component {
  render() {
    const locations = this.props.locations
      .sort((a, b) => compareStrings(a.name, b.name))
      .map(location => `${location.name}, ${location.country}`);

    const countries = Array.from(
      // use "Set" to obtain distinct set of countries
      new Set(
        this.props.locations
          .map(location => location.country)
          .sort(compareStrings)
      )
    );

    return (
      <aside className="sidebar">
        <div className="sidebar__header">
          <h3 className="sidebar__headerTitle">Travel Log</h3>
          <p className="sidebar__headerSubtitle">
            My adventures around the world...
          </p>
        </div>

        <ExpandableList title="Locations" items={locations} />
        <ExpandableList title="Countries" items={countries} />
      </aside>
    );
  }
}
