import { MdDeleteOutline } from "react-icons/md";

import styles from "./styles/BasketCard.module.css";

function BasketCard({ data, clickHandler }) {
  const { image, title, quantity } = data;


  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{title}</p>
      <div className={styles.actions}>
        {quantity === 1 && (
          <button onClick={() => clickHandler("REMOVE_ITEM", data)}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => clickHandler("DECREASE_ITEM", data)}>-</button>
        )}
        <span>{quantity}</span>
        <button onClick={() => clickHandler("INCREASE_ITEM", data)}>+</button>
      </div>
    </div>
  );
}

export default BasketCard;
