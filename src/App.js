import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import "./app.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { CartProvider } from "./context/CartContext";


function App() {  
  
  return (
    <div className="App">

    <CartProvider> 
      <BrowserRouter>   

        <NavBar /> 
        <Routes>
            <Route path="/" element={<ItemListContainer greet="Bienvenido a Ferreteria Leal" />}></Route>      
                
            <Route path="/item/:id" element={<ItemDetailContainer greet= "Detalle del producto"/>}></Route>                   

            <Route path="/category/:categoryId" element={<ItemListContainer greet= "Categoria de Items"/>}></Route> 

            <Route path="/cart" element={<Cart />} />   


        </Routes>
      </BrowserRouter>
    </CartProvider> 

     

    </div>
  );
}

export default App;

