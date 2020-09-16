import React from "react";
import { Link } from "react-router-dom";
import Button from "./template-components";
import "./home-header.css";

function HeaderSection({ title, des, img, btn }) {
  return (
    <div className="page-container">
      <div className="row-flex">
        <div className="col-half">
          <img className="header-img" src={img} alt="header img"></img>
        </div>
        <div className="col-half">
          <div className="home-text-wrapper">
            <h1 className="home-title">{title}</h1>
            <p>{des}</p>
            <Link to="/">
              <Button btnLabel={btn} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
