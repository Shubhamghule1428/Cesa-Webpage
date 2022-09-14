import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <section id="header" className="Header">
        <div className="header_container">
          <h2>CESA</h2>
          <small>limitless,, Unforgive, Hardworking</small>
        </div>
        <div className="header_main"></div>
      </section>
    );
  }
}

export default Header;
