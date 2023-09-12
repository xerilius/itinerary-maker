import React from "react";
import styles from "./ItineraryCard.module.scss";

export function ItineraryCard(props) {
  const { attr, rmAttr } = props;

  let price;
  switch (attr.price) {
    case 1:
      price = "$";
      break;
    case 2:
      price = "$$";
      break;
    case 3:
      price = "$$$";
      break;
    default:
      price = "Free";
      break;
  }

  return (
    <div className={styles.ItineraryCard}>
      <div className={styles.Header}>
        <h3>{attr.name}</h3>
        <button className={styles.Button} onClick={() => rmAttr(attr.id)}>
          <i className="fas fa-minus"></i>
        </button>
      </div>
      <div className={styles.Label}>
        <span className={styles.PriceRange}>{price}</span>
        <span>{attr.time} hours</span>
      </div>
      <div>{attr.description}</div>
    </div>
  );
}
