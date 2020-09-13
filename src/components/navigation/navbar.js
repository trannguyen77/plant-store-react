import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icon from "./img/logo-icon.png";
import "./navbar.css";

function NavBar() {
  //show nav on mobile
  const [navClick, setNavClick] = useState(false);
  const handleNavClick = () => setNavClick(!navClick);
  const closeMenu = () => setNavClick(false);

  return (
    <div className="nav-container">
      <nav>
        <div className="site-logo">
          <Link to="/">
            <img src={icon} alt="logo"></img>
          </Link>
        </div>
        <div className="bar-menu" onClick={handleNavClick}>
          {navClick ? (
            <FontAwesomeIcon icon="times" />
          ) : (
            <FontAwesomeIcon icon="bars" />
          )}
        </div>
        <ul className={navClick ? "active" : ""}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" onClick={closeMenu}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={closeMenu}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/cart" onClick={closeMenu}>
              <FontAwesomeIcon icon="shopping-bag" />
              <span> 0</span>
            </Link>
          </li>
          <li>
            <Link to="/search">
              <FontAwesomeIcon icon="search" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default NavBar;
