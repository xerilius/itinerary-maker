import React from 'react';
import AttractionCard from './AttractionCard';


export default function AvailableAttractions(props) {
    const { data, addAttr, available} = props;
    let attractions;

    function getDetailsFromAvailableIDs() {
        const attrDetails = []
        for (let i = 0; i < available.length; i++) {
          attrDetails.push(data[available[i]])
       }
        attractions = attrDetails.map(
            attr => <AttractionCard attr={attr} addAttr={addAttr} />
        );
    }
    getDetailsFromAvailableIDs();

    return (
        <div className="content-item">
            <h3 className="content-heading">
                <i class="fas fa-map-marker-alt"></i>
                Available Attractions
            </h3> 
            {attractions}
        </div>
    );
}