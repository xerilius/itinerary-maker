import React from "react";
import styles from "./Filter.module.scss";

export function Filter({ setTime, setPrice, price }) {
  const hours = [0, 1, 2, 3, 4, 6, 8, 10, 12, 16];

  return (
    <div className={styles.Filter}>
      <h1 className={styles.Header}>Paris</h1>
      <div className={styles.ItineraryFilters}>
        <div className={styles.Time}>
          <span className={styles.Label}>Time Remaining:</span>
          <select
            name="time"
            onChange={(e) => {
              setTime(parseInt(e.target.value));
            }}
          >
            {hours.map((hr) => {
              return (
                <option key={hr} value={hr}>
                  {hr}
                </option>
              );
            })}
          </select>
        </div>
        <div className={styles.Price}>
          <span className={styles.Label}> Price:</span>
          {Array.from(Array(4)).map((x, i) => {
            return (
              <button
                key={`button${i}`}
                className={`${price === i ? styles.ActivePrice : ""}`}
                value={i}
                onClick={(e) => setPrice(parseInt(e.target.value))}
              >
                {i === 0 ? "Free" : "$".repeat(i)}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
