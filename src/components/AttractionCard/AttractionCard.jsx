import React from "react";
import styles from "./AttractionCard.module.scss";

export function AttractionCard({ attr, addAttr }) {
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
    <div className={styles.AttractionCard}>
      <div className={styles.Header}>
        <h3>{attr.name}</h3>
        <button className={styles.Button} onClick={() => addAttr(attr.id)}>
          <i className="fas fa-plus"></i>
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
