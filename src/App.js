import React from "react";
import { Itinerary } from "./components";
import style from "./App.module.scss";

export default function App() {
  return (
    <div className={style.App}>
      <Itinerary />
    </div>
  );
}
