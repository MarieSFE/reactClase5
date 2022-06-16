import React from 'react'

const Item = ({item}) => {
    
  return (
    <div>
        <div>
            <img src= {item.image} alt="" width="200"/>
        </div>
        <div>
            <h2>{item.name}</h2>
        </div>
        <div>
            <h2>{item.Precio}</h2>
        </div>
    </div>);  
}

export default Item;
