import React from "react";
import { Link } from "react-router-dom";
import icon from "./img/logo-icon.png";
import searchIcon from "./img/search-icon.png";
import cartIcon from "./img/cart-icon.png";
import "./navbar.css";
import Home from "../../containers/home/home";

function NavBar() {
  return (
    <nav className="navbar"> 
      <Link className="site-logo" to="/">
        <a>
          <img src={icon} alt="logo"></img>
        </a>
      </Link>

      <div className="menu-bar">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
          <Link to="/blog">
            <li>Blog</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/cart">
            <li>
              <img src={cartIcon} alt="cart"></img>
              <span> 0</span>
            </li>
          </Link>
          <Link to="/search">
            <li>
              <img src={searchIcon} alt="search"></img>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
