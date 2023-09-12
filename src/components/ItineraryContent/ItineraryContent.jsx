import React, { useState, useEffect } from "react";
import { AvailableAttractions } from "../AvailableAttractions";
import { CurrentAttractions } from "../CurrentAttractions";
import styles from "./ItineraryContent.module.scss";

export function ItineraryContent({ data, time, price }) {
  const [available, setAvailable] = useState([]);
  const [itinerary, setItinerary] = useState([]);
  const [itineraryHrs, setItineraryHrs] = useState(0);
  const [timeLeft, setTimeLeft] = useState(time);

  useEffect(() => {
    let IDs = [];
    data.map((attr) => IDs.push(attr.id));
    setAvailable(IDs);
  }, [data]);

  useEffect(() => {
    if (time && price) {
      let timeRemaining = time - itineraryHrs;

      let filtered = [...data].filter(
        (attr) => attr.time <= timeRemaining && attr.price === price
      );

      let availableIDs = [];
      let filteredAvailableIDs = [];
      filtered.map((attr) => availableIDs.push(attr.id));

      for (let i = 0; i < availableIDs.length; i++) {
        if (!itinerary.includes(availableIDs[i])) {
          filteredAvailableIDs.push(availableIDs[i]);
        }
      }
      setAvailable(filteredAvailableIDs);
      setTimeLeft(timeRemaining);
    }
  }, [data, itinerary, itineraryHrs, time, price, timeLeft]);

  useEffect(() => {
    if (itineraryHrs === 0) {
      setTimeLeft(time);
    }
  }, [time, itineraryHrs]);

  function addAttr(id) {
    if (itinerary.find((itinID) => itinID === id)) {
      alert("This attraction is already in your itinerary.");
    } else {
      let addPlace = data[id];
      if (addPlace.time > timeLeft) {
        return alert("This exceeds your max total amount of time");
      }

      let count = 0;
      for (let i = 0; i < itinerary.length; i++) {
        count += data[itinerary[i]].time;
      }
      let total = count + parseInt(addPlace.time);
      let maxTime = time;
      let updatedAvail = [...available].filter((attrID) => attrID !== id);

      setTimeLeft(maxTime - total);
      setAvailable(updatedAvail);
      setItinerary([...itinerary, addPlace.id]);
      setItineraryHrs(total);
    }
  }

  function rmAttr(id) {
    let rmPlaceID = [...itinerary].find((attrID) => attrID === id);
    let addAttrIDToAvail = [...available, rmPlaceID];
    let rmItinerary = [...itinerary].filter((attrID) => attrID !== id);
    let hours = itineraryHrs;

    setAvailable(addAttrIDToAvail);
    setItinerary(rmItinerary);
    setItineraryHrs(hours - data[rmPlaceID].time);
    setTimeLeft(hours + parseInt(data[rmPlaceID].time));
  }

  return (
    <div className={styles.ItineraryContent}>
      <AvailableAttractions
        data={data}
        addAttr={addAttr}
        available={available}
      />
      <CurrentAttractions
        data={data}
        itin={itinerary}
        rmAttr={rmAttr}
        hrs={itineraryHrs}
      />
    </div>
  );
}
