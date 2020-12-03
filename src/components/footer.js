import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="content-container">
        <div className="col-one-fourth">
          <p className="store-name">Plant Store</p>
          <p>Upper West Side</p>
          <p>Monday-Thursday: 12pm-7pm </p>
          <p>Friday-Sunday: 11am-7pm</p>
        </div>
        <div className="col-one-fourth">
          <ul>About us</ul>
          <ul>FAQ</ul>
          <ul>Shipping Info</ul>
          <ul>Corporate Gifting</ul>
        </div>
        <div className="col-one-fourth">
          <ul>Membership</ul>
          <ul>Subscriptions</ul>
          <ul>Careers</ul>
          <ul>Contact Us</ul>
        </div>
        <div className="col-one-fourth">
          <p>PAYMENT</p>
          <p>
            <img
              className="icon-footer"
              src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/visa.svg"
              alt="icon 1"
            />
            <img
              className="icon-footer"
              src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/mastercard.svg"
              alt="icon 1"
            />
            <img
              className="icon-footer"
              src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/jcb.svg"
              alt="icon 1"
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
