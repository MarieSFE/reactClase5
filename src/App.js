import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import "./app.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  
  function handleSubmit(evt){
        evt.preventDefault()
      ;
      console.log ('handler button');

      }
  
   {/*function   handleKeyDown(evt) {
    const arrayVocales = 'aeiou'.split('');    

    console.log (evt.key);
    const tecla = evt.key;
     if (arrayVocales.includes(evt.key))
      evt.preventDefault();
    
  } */}

  
  function handleOnAdd() {
      console.log("on add handler")
    }
  

  return (
    <div className="App"> 

    <BrowserRouter>   

        <NavBar /> 
        <Routes>
            <Route path="/" element={<ItemListContainer greet="Bienvenido a Ferreteria Leal" />}></Route>      
                
            <Route path="/item/:id" element={<ItemDetailContainer greet= "Detalle del producto"/>}></Route>          
             
            <Route path="/counting" element={<ItemCount onAdd={handleOnAdd} stock={5} initial={1}/>}></Route>  

            <Route path="/category/:categoryId" element={<ItemListContainer greet= "Categoria de Items"/>}></Route>    
        </Routes>
     </BrowserRouter>

     {/*<form>
      <input onHeyDown ={handleKeyDown}
      placeholder = "hola"></input>
      <button onClick={handleSubmit}>SUBMIT</button>
  </form>*/}

    </div>
  );
}

export default App;

