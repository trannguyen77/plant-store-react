import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icon from "./img/logo-icon.png";
import "./navbar.css";

function NavBar() {
  //show nav on mobile
  const [navClick, setNavClick] = useState(false);
  const handleNavClick = () => setNavClick(!navClick);

  return (
    <nav>
      <div className="site-logo">
      <Link  to="/">
        <img src={icon} alt="logo"></img>
      </Link>
        </div>
      <div  className='bar-menu'onClick={handleNavClick}>
          {navClick ? (
            <FontAwesomeIcon icon="times" />
          ) : (
            <FontAwesomeIcon icon="bars" />
          )}</div>
      <ul className={navClick ? 'active':''}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart">
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
  );
}
export default NavBar;
