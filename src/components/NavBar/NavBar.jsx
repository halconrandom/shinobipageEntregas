import React from "react";
import "./NavBar.css";
import home from "../../media/img/home.png"
import store from "../../media/img/store.png"
import systemLogo from "../../media/img/configuration.png"
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {

  return (
    <div className="navBar">
        <nav>
          <ul className="navbarList">
            <li>
              <img className="iconListNavbar" src={home} alt="inicio" title="Inicio"/>
            </li>
            <li>
              <img className="iconListNavbar" src={store} alt="tienda" title="Tienda"/>
            </li>
            <li>
              <img className="iconListNavbar" src={systemLogo} alt="sistemas" title="Sistemas"/>
            </li>
            <li>
              <CartWidget/>
            </li>
          </ul>
        </nav>

    </div>
  );
};

export default NavBar;
