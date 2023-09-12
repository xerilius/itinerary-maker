import React from "react";
import { AttractionCard } from "../AttractionCard";
import styles from "./AvailableAttractions.module.scss";

export function AvailableAttractions({ data, addAttr, available }) {
  let attractions;

  function getDetailsFromAvailableIDs() {
    const attrDetails = [];
    for (let i = 0; i < available.length; i++) {
      attrDetails.push(data[available[i]]);
    }
    attractions = attrDetails.map((attr, i) => (
      <AttractionCard key={`attraction${i}`} attr={attr} addAttr={addAttr} />
    ));
  }
  getDetailsFromAvailableIDs();

  return (
    <div className={styles.AvailableAttractions}>
      <h3 className={styles.Header}>
        <i className="fas fa-map-marker-alt"></i>
        Available Attractions
      </h3>
      {attractions}
    </div>
  );
}
