import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import productos from "../../mock/products.json";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({saludo})=> {

  const [products,setProducts] = useState ([]);
  const {categoryId} = useParams();

  useEffect (() =>{
    const traerProductos = new Promise ((res, rej) =>{
      setTimeout(()=>{
        if(categoryId === undefined)
          res (productos);
        else{
          const itemsFound= productos.filter(category => {
            return category.category === categoryId;
          })
          res (itemsFound);
        }
      }, 2000);
    });
    //console.log(traerProductos);
    traerProductos.then ((res)=> {
       setProducts(res);
    });

  }, []);

  /*return id ? item.filter((item) => item.categotyId === id) : item*/

  console.log(products)

  return (
    <>
      <div> {saludo}</div>
      <ItemList items={productos}/>
      <a href="/item"> ir a url detalle</a>
      <a href="/counting"> ir a url counting</a>
      
    </>
    
    
    );
  }
;


export default ItemListContainer;


/*function ItemListContainer(props) {
  const arrayData = [
  {
    id: "1",
    name: "Mi producto",
    description: "El mejor producto",
    stock: 9,

  },
  {
    id: "2",
    name: "Otro producto",
    description: "Otro producto",
    stock: 5,

  },
  {
    id: "3",
    name: "Nuevo producto",
    description: "Nuevo producto",
    stock: 3,

  },

]


  return (
    <div className= "container mx-auto mt-5">
      <h1>{props.greet} </h1> 
      {arrayData.map (item =>{
        return (
          /*<Item datos={item}>
          <div key={item.id}>
            <h3 className= "text-3x1 text-gray-900 mt-2 font-medium title-font"> {item.name} </h3>
            <p>{item.description}</p>
            <hr/><br></br>
          </div>
          )
        })
      }
     
    </div>
  );
}

export default ItemListContainer;*/