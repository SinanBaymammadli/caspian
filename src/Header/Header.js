import React, { Component } from "react";
import scrollToElement from "scroll-to-element";
import "./Header.css";
import logo from "./logo2.png";

const slideToSection = (e, id) => {
  e.preventDefault();
  const section = document.getElementById(id);
  scrollToElement(section, {
    offset: -70,
    duration: 300
  });
};

class Header extends Component {
  state = {
    transparent: true
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
    if (this.state.transparent === nextState.transparent) {
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

  render() {
    const { transparent } = this.state;
    return (
      <section
        className={
          transparent ? `Header-wrapper transparent` : `Header-wrapper`
        }
      >
        <div className="container">
          <header className="Header">
            <a
              href="#home"
              onClick={e => slideToSection(e, "home")}
              className="Header-logo"
            >
              <img src={logo} alt="logo" />
            </a>

            <nav className="Header-nav">
              <a
                href="#home"
                className="Header-nav-item"
                onClick={e => slideToSection(e, "home")}
              >
                Ana sehife
              </a>
              <a
                href="#about"
                className="Header-nav-item"
                onClick={e => slideToSection(e, "about")}
              >
                Haqqimizda
              </a>
              <a
                href="#services"
                className="Header-nav-item"
                onClick={e => slideToSection(e, "services")}
              >
                Xidmetler
              </a>
              <a
                href="#tariffs"
                className="Header-nav-item"
                onClick={e => slideToSection(e, "tariffs")}
              >
                Tarifler
              </a>
              <a
                href="#partners"
                className="Header-nav-item"
                onClick={e => slideToSection(e, "partners")}
              >
                Partnyorlar
              </a>
              <a
                href="#contact"
                className="Header-nav-item"
                onClick={e => slideToSection(e, "contact")}
              >
                Elaqe
              </a>
            </nav>
          </header>
        </div>
      </section>
    );
  }
}

export default Header;
