import React from "react";
import { FormattedMessage } from "react-intl";

import "./Contact.css";

const Contact = () => {
  return (
    <section className="Contact-wrapper">
      <div className="container">
        <div className="Contact" id="contact">
          <h2>
            <FormattedMessage id="nav.contact" defaultMessage="Əlaqə" />
          </h2>
          <p>
            <FormattedMessage
              id="contact.address"
              defaultMessage="Kazım Kazımzadə, 93A, Bakı, Yasamal, AZ1065"
            />
          </p>
          <p>(+994 12) 510-50-29</p>
          <p>(+994 12) 510-50-19</p>
          <p>(+994 12) 510-50-16</p>

          <div className="social-links">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/Caspian-Delivery-Service-212369658921838/"
              className="fb social-icon"
              aria-label="Facebook page"
            >
              <svg viewBox="0 0 24 24">
                <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
