import CartWidget from "../CartWidget/CartWidget";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navMain}>
      <ul className={styles.navList}>
        <a href="/">Pinturas</a>
        <a href="/">Escaleras</a>
        <a href="/">Herramientas</a>
          <CartWidget />
      </ul>
    
    </nav>
  );
}
