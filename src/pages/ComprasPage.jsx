import React, { useContext} from 'react'
import {Card} from "../components/Card"
import { ProductosContext } from '../context/ProductosContext'
import { CarritoContext } from '../context/CarritoContext'

export const ComprasPage = () => {


    const {productos} = useContext( ProductosContext )

  //TRAE LAS FUNCIONALIDADES DE DEL CONTEXTO ESPECIFICADO 
  const {agregarCompra,eliminarCompra} = useContext(CarritoContext)


  //FUNCIONES en la card
  const handleAgregar =(compra)=>{
    agregarCompra(compra)
  }

  const handleEliminar=(id)=>{
    eliminarCompra(id)
  }



    return (
    <>
        <h1>Compras: </h1>
        <hr />

        {productos.map(producto =>(
            <Card key={producto.id}
            imagen={producto.image}
            titulo={producto.title}
            descripcion={producto.description}
            precio={producto.price}
            handleAgregar={()=>handleAgregar(producto)}
            handleEliminar={()=>handleEliminar(producto.id)}
            >

            </Card>
        ) )}
        
    </>
  )
}
