import React from 'react';
import ItineraryCard from './ItineraryCard';


export default function Itinerary(props) {
    let { data, itin, rmAttr, hrs } = props;
    let currItin;

    function getDetailsFromItineraryIDs() {
        const attrDetails = []
        for (let i = 0; i < itin.length; i++) {
          attrDetails.push(data[itin[i]])
        }    
        currItin = attrDetails.map(
            attr => <ItineraryCard attr={attr} rmAttr={rmAttr} />
        );
    }
    getDetailsFromItineraryIDs();

    return (
        <div className="content-item">
            <h3 className="content-heading">
                <i class="fas fa-plane"></i>
                Current Itinerary - {hrs} hours 
            </h3> 
            {currItin}
        </div>
    );
}