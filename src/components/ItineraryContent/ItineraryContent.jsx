import React, { useState, useEffect } from "react";
import { AvailableAttractions } from "../AvailableAttractions";
import { CurrentAttractions } from "../CurrentAttractions";
import styles from "./ItineraryContent.module.scss";

export function ItineraryContent({ ids, data, time, price }) {
  const [available, setAvailable] = useState([]);
  const [itinerary, setItinerary] = useState([]);
  const [itineraryHrs, setItineraryHrs] = useState(0);
  const [timeLeft, setTimeLeft] = useState(16);

  useEffect(() => {
    let availableIDs = [];
    let filteredAvailableIDs = [];

    let filtered = [...data].filter((attr) => attr.price === price);
    let filtered2 = [...filtered].filter(
      (attr) => attr.time === time && attr.price === price
    );
    filtered2.map((attr) => availableIDs.push(attr.id));
    for (let i = 0; i < availableIDs.length; i++) {
      if (!itinerary.includes(availableIDs[i])) {
        filteredAvailableIDs.push(availableIDs[i]);
      }
    }
    setAvailable(filteredAvailableIDs);
  }, [data, price, time, itinerary]);

  useEffect(() => {
    if (itineraryHrs === 0) {
      setTimeLeft(16);
    }
  }, [itineraryHrs]);

  function addAttr(id) {
    let addPlace = data[id];
    console.log(itinerary);
    if (addPlace.id in itinerary) {
      return alert("This attraction is already in your itinerary.");
    }
    if (addPlace.time > timeLeft) {
      return alert("This exceeds your max total amount of time");
    }

    let itnTotal = 0;
    for (let i = 0; i < itinerary.length; i++) {
      itnTotal += data[itinerary[i]].time;
    }

    const currItnTime = itnTotal + parseInt(addPlace.time);
    const updatedAvail = [...available].filter((attrID) => attrID !== id);
    console.log([...itinerary, addPlace.id]);
    setTimeLeft(16 - currItnTime);
    setItineraryHrs(currItnTime);
    setAvailable(updatedAvail);
    setItinerary([...itinerary, addPlace.id]);
    return;
  }

  function rmAttr(id) {
    let rmPlaceID = [...itinerary].find((attrID) => attrID === id);
    let addAttrIDToAvail = [...available, rmPlaceID];
    let rmItinerary = [...itinerary].filter((attrID) => attrID !== id);

    setAvailable(addAttrIDToAvail);
    setItinerary(rmItinerary);
    setItineraryHrs(itineraryHrs - data[rmPlaceID].time);
    setTimeLeft(itineraryHrs + data[rmPlaceID].time);
  }

  return (
    <div className={styles.ItineraryContent}>
      <AvailableAttractions
        data={data}
        addAttr={addAttr}
        available={available.length < 1 ? available : ids}
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
