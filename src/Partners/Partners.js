import React, { Component } from "react";
import Slider from "react-slick";

import ideal from "./ideal.webp";
import otv from "./otv.webp";
import teching from "./teching.webp";
import spv from "./spv.webp";
import wt from "./wt.webp";
import "./Partners.css";

const Button = ({ next, className, onClick }) => {
  return (
    <button
      className={`icon-btn ${className}`}
      onClick={onClick}
      aria-label="Partners slider arrow"
    >
      {next ? (
        <svg viewBox="0 0 24 24">
          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24">
          <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
        </svg>
      )}
    </button>
  );
};

class Partners extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <Button next={true} />,
      prevArrow: <Button next={false} />,
      responsive: [
        { breakpoint: 980, settings: { slidesToShow: 3 } },
        { breakpoint: 769, settings: { slidesToShow: 2 } },
        { breakpoint: 500, settings: { slidesToShow: 1 } }
      ]
    };
    return (
      <section className="Partners-wrapper">
        <div className="container">
          <div className="Partners" id="partners">
            <h2 className="section-header">Partnyorlar</h2>

            <Slider {...settings}>
              <div>
                <div className="Partner-card">
                  <img src={ideal} alt="ideal" />
                </div>
              </div>

              <div>
                <div className="Partner-card">
                  <img src={otv} alt="ideal" />
                </div>
              </div>

              <div>
                <div className="Partner-card">
                  <img src={teching} alt="ideal" />
                </div>
              </div>

              <div>
                <div className="Partner-card">
                  <img src={wt} alt="ideal" />
                </div>
              </div>

              <div>
                <div className="Partner-card">
                  <img src={spv} alt="ideal" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}

export default Partners;
