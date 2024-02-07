import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left-section">
        <h3>Social share</h3>
        <div className="icons">
          <div className="icon">
            <FontAwesomeIcon icon={faFacebookF} />
          </div>

          <div className="icon">
            <FontAwesomeIcon icon={faInstagram} />
          </div>

          <div className="icon">
            <FontAwesomeIcon icon={faTwitter} />
          </div>

          <div className="icon">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
        </div>
      </div>

      <div className="right-section">
        <div className="items">
          <h3>Event info</h3>
          <button>Enter Now</button>
          <button>Event info</button>
          <button>Course Maps</button>
          <button>Race Pack</button>
          <button>Results</button>
          <button>FAQs</button>
          <button>Am i registered?</button>
        </div>
        <div className="items">
          <h3>Registration</h3>
          <button>Enter Now</button>
          <button>Volunteers</button>
          <button>Gallery</button>
          <button>Press</button>
          <button>Results</button>
          <button>Privacy Plus</button>
          <button>Contacts</button>
        </div>
        <div className="items">
          <h3>Schedule</h3>
          <button>Gallery</button>
          <button>About</button>
          <button>Videos</button>
          <button>Results</button>
          <button>FAQs</button>
          <button>Results</button>
          <button>Volunteers</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
