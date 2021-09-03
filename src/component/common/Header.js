import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <div className="container">
        <nav>
          <a className="logo" href="#">
            <span>Dev</span>challenges.io
          </a>
          <ul className="primary-nav">
            <li>
              <Link to="/colors">Colors</Link>
            </li>
            <li>
              <Link to="/buttons">Buttons</Link>
            </li>
            <li>
              <Link to="/inputs">Inputs</Link>
            </li>
            <li>
              <Link to="/grid">Grid</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
