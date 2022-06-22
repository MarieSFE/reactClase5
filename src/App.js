import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import "./app.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  
  
  
  return (
    <div className="App"> 

    <BrowserRouter>   

        <NavBar /> 
        <Routes>
            <Route path="/" element={<ItemListContainer greet="Bienvenido a Ferreteria Leal" />}></Route>      
                
            <Route path="/item/:id" element={<ItemDetailContainer greet= "Detalle del producto"/>}></Route>          
             
            <Route path="/counting" element={<ItemCount stock={5} initial={1}/>}></Route>  

            <Route path="/category/:categoryId" element={<ItemListContainer greet= "Categoria de Items"/>}></Route>    
        </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;

