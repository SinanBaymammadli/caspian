import React, { Component } from "react";

import "./Header.css";
import logo from "./logo2.png";
import navData from "../navData";
import slideToSection from "../slideToSection";
import Sidebar from "../Sidebar/Sidebar";
import changeLocale from "../locales/changeLocale";

class Header extends Component {
  state = {
    transparent: true,
    sidebarShowing: false
  };

  componentDidMount() {
    var last_known_scroll_position = 0;
    var ticking = false;
    window.addEventListener("scroll", e => {
      last_known_scroll_position = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.changeClass(last_known_scroll_position);
          ticking = false;
        });

        ticking = true;
      }
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.state.transparent === nextState.transparent &&
      this.state.sidebarShowing === nextState.sidebarShowing
    ) {
      return false;
    }
    return true;
  }

  changeClass = scroll_pos => {
    const homeHeight = document.getElementById("home").offsetHeight;

    if (scroll_pos >= homeHeight - 80) {
      this.setState({
        transparent: false
      });
    } else {
      this.setState({
        transparent: true
      });
    }
  };

  toggleMobileNav = () => {
    this.setState(
      {
        sidebarShowing: !this.state.sidebarShowing
      },
      () => {
        const body = document.querySelector("body");

        if (this.state.sidebarShowing) {
          body.classList.add("showing");
        } else {
          body.classList.remove("showing");
        }
      }
    );
  };

  closeMobileNav = () => {
    this.setState(
      {
        sidebarShowing: false
      },
      () => {
        const body = document.querySelector("body");

        body.classList.remove("showing");
      }
    );
  };

  render() {
    const { transparent } = this.state;
    return [
      <section
        className={
          transparent ? `Header-wrapper transparent` : `Header-wrapper`
        }
        key="header"
      >
        <div className="container">
          <header className="Header">
            <div className="Header-left">
              <button
                className="icon-btn nav-toggle-btn"
                onClick={this.toggleMobileNav}
                aria-label="Sidebar toggle"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                </svg>
              </button>

              <a
                href="#home"
                onClick={e => {
                  slideToSection(e, "#home");
                  this.closeMobileNav();
                }}
                className="Header-logo"
              >
                <img src={logo} alt="logo" />
              </a>
            </div>

            <div className="Header-right">
              <nav className="Header-nav">
                {navData.map(nav => (
                  <a
                    href={nav.link}
                    className="Header-nav-item"
                    onClick={e => slideToSection(e, nav.link)}
                    key={nav.link}
                  >
                    {nav.text}
                  </a>
                ))}
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
              </nav>
            </div>
          </header>
        </div>
      </section>,
      <Sidebar
        key="sidebar"
        show={this.state.sidebarShowing}
        close={this.closeMobileNav}
      />
    ];
  }
}

export default Header;
