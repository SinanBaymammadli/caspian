import React, { Component } from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import az from "react-intl/locale-data/az";
import ru from "react-intl/locale-data/ru";

import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Services from "./Services/Services";
import Tariffs from "./Tariffs/Tariffs";
import Partners from "./Partners/Partners";
import Contact from "./Contact/Contact";

import messages from "./locales/index";

addLocaleData(en);
addLocaleData(az);
addLocaleData(ru);

const locale = localStorage.getItem("locale") || "az";

class App extends Component {
  render() {
    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        <div className="App">
          <Header />
          <div className="content">
            <Home />
            <About />
            <Services />
            <Tariffs />
            <Partners />
            <Contact />
          </div>
        </div>
      </IntlProvider>
    );
  }
}

export default App;
