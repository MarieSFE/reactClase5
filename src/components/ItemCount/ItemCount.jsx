
/* Importamos el Hook de estado */
import {useState} from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
  /* Definimos el estado con useState */
  const [count, setCount] = useState(initial);

  const suma = () => {   
     if (count < stock) {
       setCount (count + 1);
     } else {

       alert('no se puede')
     }
     }
     /*count !== stock && setCount (count+1);*/
 

  
  const resta= () => {    
    if (count > 0) {
      setCount (count - 1);
    } else {

      alert('no se puede')
    } 
    /* count !== initial && setCount (count-1); */
    }
  

  return (
    <div>
      <button onClick={resta}> - </button>
      <span>{count} </span>
      <button onClick={suma}> + </button>
      <br />
      <button>Agregar al carrito</button>
      <br/>
      <button onClick ={onAdd}>Terminar Compra</button>
    </div>
  );
}

export default ItemCount;
