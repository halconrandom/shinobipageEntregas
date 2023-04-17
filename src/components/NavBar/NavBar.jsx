import React from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";


import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className="navBar">
      <nav>
        <ul className="navbarList">
          <li>
            <Link to={"/"}>
              <img className="iconListNavbar" src="/media/img/home.png" alt="inicio" title="Inicio" />
            </Link>
          </li>
          <li>
            <NavLink to={'/Tienda'}>
            <img
              className="iconListNavbar"
              src="/media/img/store.png"
              alt="tienda"
              title="Tienda"
            />
            </NavLink>

          </li>
          <li>
            <img
              className="iconListNavbar"
              src="/media/img/configuration.png"
              alt="sistemas"
              title="Sistemas"
            />
          </li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
