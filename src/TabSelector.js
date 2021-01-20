import React, { Component } from "react";

class TabSelector extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     activeId: "home",
  //   };
  //   this.handleChangeTab = this.handleChangeTab.bind(this);
  // }

  // handleChangeTab(event) {
  //   const buttonId = event.target.id;
  //   this.setState({ activeId: buttonId });
  // }

  render() {
    return (
      <div className="TabSelector">
        <button
          id="home"
          onClick={this.props.handleChange}
          className={this.props.actualId === "home" ? "active" : ""}
        >
          Home
        </button>
        <button
          id="about"
          onClick={this.props.handleChange}
          className={this.props.actualId === "about" ? "active" : ""}
        >
          About
        </button>
        <button
          id="contact"
          onClick={this.props.handleChange}
          className={this.props.actualId === "contact" ? "active" : ""}
        >
          Contact
        </button>
      </div>
    );
  }
}

export default TabSelector;
