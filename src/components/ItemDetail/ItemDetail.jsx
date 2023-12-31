import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

//Importamos el CarritoContext: 
import { CarritoContext } from '../../context/CarritoContext'
//Importamos el useContext: 
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock, descripcion }) => {

  //1) Creamos un estado con la cantidad de productos agregados. 
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  //useContext: 
  const { agregarProducto } = useContext(CarritoContext);

  //2)Creamos una función manejadora de la cantidad: 
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    //console.log("Productos Agregados:" + cantidad);

    //Ahora acá creo un objeto con el item y la cantidad:
    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
      <h2>{nombre} </h2>
      <h3>Precio ${precio} </h3>
      <h3>ID: {id} </h3>
      <h3>{descripcion}</h3>
      <img src={img} alt={nombre} />
      {
        //Acá empleamos la lógica de montaje y desmontaje de componentes: 
      }
      {
        agregarCantidad > 0 ? (<Link to="/cart" className='miBtn'> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
    </div>
  )
}

export default ItemDetail