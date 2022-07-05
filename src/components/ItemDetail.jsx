import React, {useState} from 'react';
import { useContext } from 'react';
import ItemCount from './ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../src/context/CartContext';


const ItemDetail = ({ item}) => {

  const { addToCart } = useContext(CartContext);

  const [cant, setCant] = useState (0)

  const onAdd= (cantidad) => {
    setCant (cantidad);
    addToCart(item, cantidad);
  };

  return (
    <div>
        <h1>{item.name}</h1> 
        <p>{item.description}</p> 
        <p>{item.Precio}</p> 
        {cant === 0 ? (
            <ItemCount stock= {5} initial= {1} onAdd={onAdd}/>) : 
            (<Link to = '/cart'> ir al carrito</Link>  )
        }
        
    </div>
  )
};

export default ItemDetail