import React from 'react'
import {Link} from 'react-router-dom';

const Item = ({item}) => {

    const urlDetalle = `/item/${item.id}`

    const styles = {
        maxWidth: "380px",
        margin: "5px 15px",
    };
    
  return (
    <div>
        <div>
            <img src= {item.image} alt="" width="200"/>
        </div>
        <div>
            <h2>{item.name}</h2>
        </div>
        <div>
            <h2>$ {item.Precio}</h2>
        </div>
        <Link to={urlDetalle}>
            <button>Ver Detalle</button>
        </Link>

    </div>);  
}

export default Item;
