import React from "react";
import { useNavigate } from "react-router-dom";

export default function CarritoCompras({ carrito, setCarrito }) {
  const navigate = useNavigate();

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const irAPagar = () => {
    navigate("/pagar", { state: { carrito } });
  };

  const total = carrito.reduce((sum, item) => sum + Number(item.precio), 0);

  return (
    <div>
      <hr />
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {carrito.map((item) => (
            <div key={item.id}>
              {item.nombre} - ${Number(item.precio).toFixed(3)}
            </div>
          ))}
          <div>
            <hr />
            Total: ${Number(total).toFixed(3)}
          </div>
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
          <button onClick={irAPagar}>Pagar</button>
        </>
      )}
    </div>
  );
}