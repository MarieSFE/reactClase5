import React, {useState, useEffect} from "react";
import productos from "../mock/products.json";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = ({saludo})=> {

  const [product, setProduct] = useState ({});

  useEffect (() => {
    const traerProducto = new Promise ((res, rej) =>{
      setTimeout(()=>{
        res (productos [1]);
      }, 2000);
    });
    //console.log(traerProductos);
    traerProducto.then ((res)=> {
       setProduct(res);
    });

  }, []);

  //console.log(products)

  return (
    <>
      <div> {saludo}</div>
      {/*<ItemList items={productos}/>*/}
      <ItemDetail item={product}/>
      
    </>
    
    
    );
  }
;


export default ItemDetailContainer;