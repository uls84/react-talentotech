import { Link, useParams, useLocation } from "react-router-dom";
import "../css/DetalleProductos.css";

const ProductoDetalle = () => {
  const { id } = useParams();
  const location = useLocation();
  const producto = location.state?.producto;

  if (!producto) {
    return (
      <div>
        <p>No se pudo cargar el producto</p>
        <Link to="/carrito">
          <button>Volver a Productos</button>
        </Link>
      </div>
    );
  }

  return (
    <>
      {/*
    <h2>Detalles del Producto {id}</h2>
    <ul>
        <li key={producto.id}>
            <h2>{producto.nombre}</h2>
            <br />
            <p><strong>Descripción: </strong>{producto.descripcion}</p>
            <p>{producto.detalles}</p>
            <p>Precio: ${producto.precio}</p>
            <img src={producto.avatar} alt={producto.nombre} width="30%" />
        </li>
        <hr />
        <Link to={`/productos`}><button>Volver</button></Link>
    </ul>
    */}
      <div>
        <div className="detalle">
          <img src={producto.avatar} alt={producto.nombre} />
        </div>
        <div>

        </div>
      </div>
    </>
  );
};
export default ProductoDetalle;
