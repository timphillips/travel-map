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

function SidebarHeader() {
  return [
    <h1 className="sidebar__headerTitle">Travel Log</h1>,
    <p className="sidebar__headerSubtitle">
      Built by{" "}
      <a
        href="http://www.tim-phillips.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tim Phillips
    </a>. Source code on{" "}
      <a
        href="https://github.com/timphillips/travel-map"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
    </a>.
  </p>];
}

export class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: false
    };
  }

  onToggleShowOptions(props) {
    this.setState({
      showOptions: !this.state.showOptions
    });
  }

  render() {
    const locations = this.props.locations
      .sort((a, b) => compareStrings(a.name, b.name))
      .map(location => `${location.name}, ${location.country}`);

    const countries = Array.from(
      // use "Set" to obtain distinct set of countries
      new Set(
        this.props.locations.map(location => location.country).sort(compareStrings)
      )
    );

    const optionsContent = this.state.showOptions
      ? <OptionsContent
        locations={locations}
        countries={countries}
        onCountryChanged={this.props.onCountryChanged}
        onYearChanged={this.props.onYearChanged} />
      : null;

    return (
      <div className="sidebar">
        <div className="sidebar__content">
          <SidebarHeader />
          {optionsContent}
        </div>
        <OptionsToggle showOptions={this.state.showOptions} onToggleShowOptions={() => this.onToggleShowOptions()} />
      </div >
    );
  }
}

function OptionsToggle(props) {
  return (
    <div
      className="options__toggle"
      onClick={props.onToggleShowOptions}>
      <a>{props.showOptions ? "Close Options" : "Show Options"}</a>
    </div>
  );
}

function OptionsContent(props) {
  const countryOptions = [
    <option key="all" value="">All</option>,
    ...props.countries.map(country => <option key={country} value={country}>{country}</option>)
  ];

  return <div className="options">
    <h4 className="options__title">Options</h4>
    <div className="options__field">
      <label className="options__fieldLabel">Year</label>
      <select defaultValue="all" onChange={(e) => props.onYearChanged(e.target.value)}>
        <option value="">All</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>
        <option value="2013">2013</option>
      </select>
    </div>
    <div className="options__field">
      <label className="options__fieldLabel">Country</label>
      <select defaultValue="all" onChange={(e) => props.onCountryChanged(e.target.value)}>
        {countryOptions}
      </select>
    </div>
    {/*<ExpandableList title="Locations" items={props.locations} />
    <ExpandableList title="Countries" items={props.countries} />*/}
  </div>
} 