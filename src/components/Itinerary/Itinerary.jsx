import React, { useState } from "react";
import { ItineraryContent } from "../ItineraryContent";
import { Filter } from "../Filter";
import styles from "./Itinerary.module.scss";
import data from "../../data/data.json";

export function Itinerary() {
  const [time, setTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(16);
  const [price, setPrice] = useState(null);

  const processedData = data.attractions.map((attr, i) => ({ ...attr, id: i }));
  const ids = [...Array(data.attractions.length).keys()];

  return (
    <div className={styles.Itinerary}>
      <Filter setTime={setTime} setPrice={setPrice} price={price} />
      <ItineraryContent
        data={processedData}
        ids={ids}
        time={time}
        price={price}
        setTimeLeft={setTimeLeft}
        timeLeft={timeLeft}
      />
    </div>
  );
}
