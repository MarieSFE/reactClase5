import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import "./app.css";

function App() {
  
  
  
  return (
    <div className="App">      
        <NavBar />     
        
        <ItemListContainer greet="Bienvenido a Ferreteria Leal" /> 

        <ItemCount stock={5} initial={1}/>
     
    </div>
  );
}

export default App;

