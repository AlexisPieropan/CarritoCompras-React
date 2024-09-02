import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const CarritoPage = () => {

  //TRAE LAS FUNCIONALIDADES DE DEL CONTEXTO ESPECIFICADO 
  const {listCompras,agregarCompra,aumentarCantidad,disminuirCantidad,eliminarCompra} = useContext(CarritoContext)

  //FUNCION QUE CALCULA EL TOTAL EN EL CARRITO DE COMPRAS
  const calcularTotal=()=>{
    return listCompras.reduce((total,item)=> total+ item.price * item.cantidad, 0 ).toFixed(2)
  }

  //PARA SIMULAR UNA IMPRESION DE LA COMPRA
  const handleImpresion=()=>{
    print()
  }

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

          <th><b>TOTAL: </b></th>
            <td></td>
            <td></td>
            <td>${calcularTotal()} </td>
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button className="btn btn-primary" onClick={handleImpresion} disabled={listCompras<1} >COMPRAR</button>
      </div>
    </>
  );
};

