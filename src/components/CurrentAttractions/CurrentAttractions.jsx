import React from "react";
import { ItineraryCard } from "../ItineraryCard";
import styles from "./CurrentAttractions.module.scss";

export function CurrentAttractions(props) {
  let { data, itin, rmAttr, hrs } = props;
  let currItin;

  function getDetailsFromItineraryIDs() {
    const attrDetails = [];
    for (let i = 0; i < itin.length; i++) {
      attrDetails.push(data[itin[i]]);
    }
    currItin = attrDetails.map((attr) => (
      <ItineraryCard attr={attr} rmAttr={rmAttr} />
    ));
  }
  getDetailsFromItineraryIDs();

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
