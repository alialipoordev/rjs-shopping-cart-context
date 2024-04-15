import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCartHook";

import { PiShoppingCartSimpleBold } from "react-icons/pi";

import styles from "./Layout.module.css";

function Layout({ children }) {
  const [state] = useCart();

  return (
    <>
      <header className={styles.header}>
        <Link to="/products">HEADER</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartSimpleBold />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed By ME</p>
      </footer>
    </>
  );
}

export default Layout;
