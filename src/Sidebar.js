import React from "react";

function compareStringsAscending(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

function compareStringsDescending(a, b) {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  return 0;
}

function SidebarHeader() {
  return (
    <React.Fragment>
      <h1 className="sidebar__headerTitle">Travel Log</h1>
      <p className="sidebar__headerSubtitle">
        Built by{" "}
        <a
          href="http://www.tim-phillips.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tim Phillips
        </a>
        . Source code on{" "}
        <a
          href="https://github.com/timphillips/travel-map"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </React.Fragment>
  );
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
      .sort((a, b) => compareStringsAscending(a.name, b.name))
      .map(location => `${location.name}, ${location.country}`);

    const countries = Array.from(
      // use "Set" to obtain distinct set of countries
      new Set(
        this.props.locations
          .map(location => location.country)
          .sort(compareStringsAscending)
      )
    );

    const flatten = (a, b) => a.concat(b);
    const years = Array.from(
      // use "Set" to obtain distinct set of years
      new Set(
        this.props.locations
          .map(location => (location.events || []).map(event => event.year))
          .reduce(flatten, [])
          .sort(compareStringsDescending)
      )
    );

    return (
      <div className="sidebar">
        <div className="sidebar__content">
          <SidebarHeader />
          {this.state.showOptions && (
            <OptionsContent
              filters={this.props.filters}
              locations={locations}
              countries={countries}
              years={years}
              onCountryChanged={this.props.onCountryChanged}
              onYearChanged={this.props.onYearChanged}
            />
          )}
        </div>
        <OptionsToggle
          showOptions={this.state.showOptions}
          onToggleShowOptions={() => this.onToggleShowOptions()}
        />
      </div>
    );
  }
}

function OptionsToggle(props) {
  return (
    <div className="options__toggle" onClick={props.onToggleShowOptions}>
      <a>{props.showOptions ? "Hide Options" : "Show Options"}</a>
    </div>
  );
}

function OptionsContent(props) {
  const countryOptions = [
    <option key="all" value="">
      All
    </option>,
    ...props.countries.map(country => (
      <option key={country} value={country}>
        {country}
      </option>
    ))
  ];
  const yearOptions = [
    <option key="all" value="">
      All
    </option>,
    ...props.years.map(years => (
      <option key={years} value={years}>
        {years}
      </option>
    ))
  ];

  const yearSelectedValue = props.filters.year || "all";
  const countrySelectedValue = props.filters.country || "all";

  return (
    <div className="options">
      <div className="options__field">
        <label className="options__fieldLabel">Year</label>
        <select
          defaultValue={yearSelectedValue}
          onChange={e => props.onYearChanged(e.target.value)}
        >
          {yearOptions}
        </select>
      </div>
      <div className="options__field">
        <label className="options__fieldLabel">Country</label>
        <select
          defaultValue={countrySelectedValue}
          onChange={e => props.onCountryChanged(e.target.value)}
        >
          {countryOptions}
        </select>
      </div>
    </div>
  );
}
