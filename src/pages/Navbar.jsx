import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <div>
          <img className="logoGrande" src="public/logoGrande.png"></img>
        </div>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/servicios">Servicios</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          {/*<li><Link to ="/Pagar">Carrito</Link></li>*/}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
