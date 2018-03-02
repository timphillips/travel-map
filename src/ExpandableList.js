import React, { Component } from "react";

export class ExpandableList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false
    };
  }

  toggleIsExpanded() {
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }

  render() {
    let list;
    if (this.state.isExpanded) {
      const listItems = this.props.items.map(item => (
        <li className="expandableList__li" key={item}>
          {item}
        </li>
      ));
      list = <ul className="expandableList__ul">{listItems}</ul>;
    } else {
      list = "";
    }

    const iconClasses = this.state.isExpanded
      ? "expandableList__icon expandableList__icon--expanded"
      : "expandableList__icon expandableList__icon--collapsed";

    return (
      <div className="expandableList">
        <i className={iconClasses} onClick={() => this.toggleIsExpanded()} />
        <span
          className="expandableList__title"
          onClick={() => this.toggleIsExpanded()}
        >
          {this.props.title}
        </span>
        {list}
      </div>
    );
  }
}
