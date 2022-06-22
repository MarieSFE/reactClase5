import React, {useState, useEffect} from "react";
import productos from "../mock/products.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({saludo})=> {

  const [product, setProduct] = useState ({});
  const { id } = useParams();
  console.log("parametros: ", id)

  useEffect (() => {
    const traerProducto = new Promise ((res, rej) =>{
      setTimeout(()=>{
        let itemNumber= parseInt(id)
        res (productos [itemNumber]);
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