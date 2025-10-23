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
      <div className="detalle">
        <div className="imagenDetalle">
          <img src={producto.avatar} alt={producto.nombre} />
        </div>
        <div className="textoDetalle">
          <h1>{producto.nombre}</h1>
          <hr />
          <p>
            <strong>Descripción: </strong>
            {producto.descripcion}
          </p>
          <p>{producto.detalles}</p>
          <h2>${producto.precio}</h2>
          <hr />
         <Link to="/Productos"><button>Volver</button></Link>
        </div>
        <div></div>
      </div>
    </>
  );
};
export default ProductoDetalle;
