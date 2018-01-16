import React, { Component } from "react";

import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Services from "./Services/Services";
import Tariffs from "./Tariffs/Tariffs";
import Partners from "./Partners/Partners";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <About />
        <Services />
        <Tariffs />
        <Partners />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
