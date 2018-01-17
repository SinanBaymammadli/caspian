import React, { Component } from "react";

import "./Sidebar.css";
import navData from "../navData";
import slideToSection from "../slideToSection";

class Sidebar extends Component {
  render() {
    const { show } = this.props;
    return (
      <div className={show ? "sidebar show" : "sidebar"}>
        <nav className="sidebar-nav">
          {navData.map(nav => (
            <a
              href={nav.link}
              className="sidebar-nav-item"
              onClick={e => {
                slideToSection(e, nav.link);
                this.props.close();
              }}
              key={nav.link}
            >
              {nav.text}
            </a>
          ))}
        </nav>
      </div>
    );
  }
}

export default Sidebar;
