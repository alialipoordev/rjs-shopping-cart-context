import { Link } from "react-router-dom";
import { productQuantity, shortenText } from "../helpers/helper";
import { TbListDetails } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { TbShoppingBagCheck } from "react-icons/tb";
import { useCart } from "../hooks/useCartHook";

import styles from "./styles/Card.module.css";

function Card({ data }) {
  const { id, image, title, price } = data;

  const [state, dispatch] = useCart();

  const quantity = productQuantity(state, id);

  const clickHandler = (type) => {
    dispatch({ type: type, payload: data });
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          {quantity === 1 && (
            <button onClick={() => clickHandler("REMOVE_ITEM")}>
              <MdDeleteOutline />
            </button>
          )}
          {quantity > 1 && (
            <button onClick={() => clickHandler("DECREASE_ITEM")}>-</button>
          )}
          {!!quantity && <span>{quantity}</span>}
          {quantity === 0 ? (
            <button onClick={() => clickHandler("ADD_ITEM")}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button onClick={() => clickHandler("INCREASE_ITEM")}>+</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
