import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Navbar.css"

function Navbar() {
  return (
    <nav>
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to ="/carrito">Carrito</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar