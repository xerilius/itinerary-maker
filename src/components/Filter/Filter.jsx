import React from "react";
import styles from "./Filter.module.scss";

export function Filter({ setTime, setPrice, price }) {
  return (
    <div className={styles.Filter}>
      <h1 className={styles.Header}>Welcome to Paris</h1>
      <div className={styles.ItineraryFilters}>
        <div className={styles.Time}>
          <span className={styles.Label}>Total Amount of Time:</span>
          <select
            name="time"
            onChange={(e) => setTime(parseInt(e.target.value))}
          >
            <option> </option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={6}>6</option>
            <option value={8}>8</option>
            <option value={10}>10</option>
            <option value={12}>12</option>
            <option value={16}>16</option>
          </select>
        </div>
        <div className={styles.Price}>
          <span className={styles.Label}> Price:</span>
          <button
            className={`${price === 0 ? styles.ActivePrice : ""}`}
            value={0}
            onClick={(e) => setPrice(parseInt(e.target.value))}
          >
            Free
          </button>
          <button
            className={`${price === 1 ? styles.ActivePrice : ""}`}
            value={1}
            onClick={(e) => setPrice(parseInt(e.target.value))}
          >
            $
          </button>
          <button
            className={`${price === 2 ? styles.ActivePrice : ""}`}
            value={2}
            onClick={(e) => setPrice(parseInt(e.target.value))}
          >
            $$
          </button>
          <button
            className={`${price === 3 ? styles.ActivePrice : ""}`}
            value={3}
            onClick={(e) => setPrice(parseInt(e.target.value))}
          >
            $$$
          </button>
        </div>
      </div>
    </div>
  );
}
