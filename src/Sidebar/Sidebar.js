import React, { Component } from "react";

import "./Sidebar.css";
import navData from "../navData";
import slideToSection from "../slideToSection";
import changeLocale from "../locales/changeLocale";

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

          <div className="lang-links">
            <a
              role="button"
              className="Header-nav-item"
              onClick={() => changeLocale("az")}
            >
              AZ
            </a>
            <a
              role="button"
              className="Header-nav-item"
              onClick={() => changeLocale("en")}
            >
              EN
            </a>
            <a
              role="button"
              className="Header-nav-item"
              onClick={() => changeLocale("ru")}
            >
              RU
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
