import React from "react";
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

export function Sidebar(props) {
  const locations = props.locations
    .sort((a, b) => compareStrings(a.name, b.name))
    .map(location => `${location.name}, ${location.country}`);

  const countries = Array.from(
    // use "Set" to obtain distinct set of countries
    new Set(
      props.locations.map(location => location.country).sort(compareStrings)
    )
  );

  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <h3 className="sidebar__headerTitle">Travel Log</h3>
      </div>

      <div className="sidebar__controls">
        <ExpandableList title="Locations" items={locations} />
        <ExpandableList title="Countries" items={countries} />
      </div>

      <div className="sidebar__footer">
        <a
          className="sidebar__openSource"
          href="https://github.com/timphillips/travel-map"
          target="_blank"
        >
          <img
            className="sidebar__openSourceLogo"
            src="github-32px.png"
            width={20}
            height={20}
          />
          <span className="sidebar__openSourceLabel">Open Source</span>
        </a>
        <span>
          Built by{" "}
          <a href="http://www.tim-phillips.com" target="_blank">
            Tim Phillips
          </a>
        </span>
      </div>
    </aside>
  );
}
