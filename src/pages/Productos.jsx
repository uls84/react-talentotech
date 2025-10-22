import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CarritoCompras from "./Carrito";
import datosProductos from "../assets/productos.json";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    try {
      setProductos(datosProductos.productos);
      setCargando(false);

    } catch (error) {
      console.error("Error:", error);
      setError("Hubo un problema al cargar los productos.");
      setCargando(false);
    }
  }, []);


  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    alert(`Producto ${producto.nombre} agregado al carrito`);
  }

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
    <ul id="lista-productos">
      {productos.map((producto) => (
        <li key={producto.id}>
        <h2>{producto.nombre}</h2>
          <br />
          Descripción: {producto.descripcion}
          <br />
          Precio: ${producto.precio}
          <br />
          <img src={producto.avatar} alt={producto.nombre} width="80%" />
          <Link to={`/productos/${producto.categoria || 'sin-categoria'}/${producto.id}`} state={{producto}}><button>Más detalles</button></Link>
          <button onClick={() => agregarAlCarrito(producto)}>Comprar</button>
        </li>
      ))}
    </ul>
    <CarritoCompras carrito={carrito} setCarrito={setCarrito} />
    </>
  );
}