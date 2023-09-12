import React, { useState } from "react";
import { ItineraryContent } from "../ItineraryContent";
import { Filter } from "../Filter";
import styles from "./Itinerary.module.scss";
import data from "../../data/data.json";

export function Itinerary() {
  const [totalTime, setTotalTime] = useState(16);
  const [priceRange, setPriceRange] = useState(null);
  const processedData = data.attractions.map((attr, i) => ({ ...attr, id: i }));

  return (
    <div className={styles.Itinerary}>
      <Filter
        setTime={setTotalTime}
        setPrice={setPriceRange}
        price={priceRange}
      />
      <ItineraryContent
        data={processedData}
        time={totalTime}
        price={priceRange}
      />
    </div>
  );
}
