import { FaMagento, FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbarContainer">
        <div className="navLogo">
          <FaMagento />
          Omnix
        </div>
        <ul className="navMenu">
          <li className="navItem">
            <Link to="/">Início</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
