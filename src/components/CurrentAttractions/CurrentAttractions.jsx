import React from "react";
import { ItineraryCard } from "../ItineraryCard";
import styles from "./CurrentAttractions.module.scss";

export function CurrentAttractions({ data, itin, rmAttr, hrs }) {
  let currItin;

  const attrDetails = [];
  for (let i = 0; i < itin.length; i++) {
    attrDetails.push(data[itin[i]]);
  }
  currItin = attrDetails.map((attr, i) => (
    <ItineraryCard key={`${attr}-${i}`} attr={attr} rmAttr={rmAttr} />
  ));

  return (
    <div className={styles.CurrentAttractions}>
      <h3 className={styles.Header}>
        <i className="fas fa-plane"></i>
        Current Itinerary ({hrs} hrs)
      </h3>
      {currItin}
    </div>
  );
}
