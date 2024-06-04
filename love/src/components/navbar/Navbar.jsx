import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext/UserContext";
import "./Navbar.scss";

export default function Navbar() {
  const { user } = useContext(UserContext);
  const authenticatedUser = useContext(UserContext);
  console.log(`Navbar:`, authenticatedUser);

  return (
    <div className="navbar">
      <div className="navbar__container">
        <ul className="navbar__items">
          <li>
            <Link to="/photos" className="navbar__item">
              PHOTOS
            </Link>
          </li>
          <li>
            <Link to="/search" className="navbar__item">
              SEARCH
            </Link>
          </li>
          <li>
            <Link to="/" className="navbar__item">
              <img
                className="navbar__logo"
                src="https://static.vecteezy.com/system/resources/thumbnails/012/658/357/small_2x/heart-shaped-love-icon-symbol-for-pictogram-app-website-logo-or-graphic-design-element-pixel-art-style-illustration-format-png.png"
              ></img>
            </Link>
          </li>
          <li>
            <Link to="/login" className="navbar__item">
              {authenticatedUser.user ? "ACCOUNT" : "LOGIN"}
            </Link>
          </li>
          <li>
            <Link to="/archive" className="navbar__item">
              ARCHIVE
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
