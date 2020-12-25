import React, { useState, useEffect } from 'react';
import Content from './Content';
import Filter from './Filter';
import data from './../data/data.json';

export default function Paris() {
  const [totalTime, setTotalTime] = useState(16);
  const [priceRange, setPriceRange] = useState(null);
  const processedData = data.attractions.map((attr, i) => ({...attr, id:i}));

  return (
    <div>
        <Filter 
          setTime={setTotalTime} 
          setPrice={setPriceRange} 
          price={priceRange} 
        />
        <Content data={processedData} time={totalTime} price={priceRange} />
    </div>
  );
}