import React from "react";
import { FormattedMessage } from "react-intl";

import "./Home.css";

const Home = () => {
  return (
    <section className="Home-wrapper">
      <div className="Home-overlay">
        <div className="container">
          <div className="Home" id="home">
            <h1 className="Home-text">
              <FormattedMessage id="home.header1" defaultMessage="Caspian" />
              <br />
              <FormattedMessage
                id="home.header2"
                defaultMessage="Delivery Service"
              />
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
