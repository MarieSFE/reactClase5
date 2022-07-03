import CartWidget from "../CartWidget/CartWidget";
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className={styles.navMain}>
      <ul className={styles.navList}>
        <NavLink to= "/">Productos</NavLink>
        <NavLink to= "/detalle">detalle</NavLink>
        
        <NavLink to= "/category/Estanterias">Estanterias</NavLink>
        <NavLink to= "/category/Pinturas">Pinturas</NavLink>
        <NavLink to= "/category/Escaleras">Escaleras</NavLink>
       
        <CartWidget />
      </ul>
    
    </nav>
  );
}
