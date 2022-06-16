import CartWidget from "../CartWidget/CartWidget";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navMain}>
      <ul className={styles.navList}>
        <a href="/">Servicios</a>
        <a href="/">Contactos</a>
        <a href="/">Sucursales</a>
          <CartWidget />
      </ul>
    
    </nav>
  );
}
