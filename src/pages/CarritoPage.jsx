import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const CarritoPage = () => {

  //TRAE LAS FUNCIONALIDADES DE DEL CONTEXTO ESPECIFICADO 
  const {listCompras,agregarCompra,aumentarCantidad,disminuirCantidad,eliminarCompra} = useContext(CarritoContext)

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>

          {
            listCompras.map(item=>(
              <tr key={item.id}>
              <th scope="row"> {item.title} </th>
              <td> {item.price} </td>
              <td>
                <button className="btn btn-outline-primary" onClick={ ()=> disminuirCantidad(item.id)}>-</button>
                <button className="btn btn-primary"> {item.cantidad} </button>
                <button className="btn btn-outline-primary" onClick={()=> aumentarCantidad(item.id)}>+</button>
              </td>
              <td>
                <button type="button" className="btn btn-danger" onClick={()=>eliminarCompra(item.id)}> 
                  Eliminar
                </button>
              </td>
            </tr>
            ))
          }

         
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button className="btn btn-primary">COMPRAR</button>
      </div>
    </>
  );
};

