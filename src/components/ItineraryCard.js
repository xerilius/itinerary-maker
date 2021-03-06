import React from 'react';


export default function ItineraryCard(props) {
    const { attr, rmAttr } = props;

    let price;
    switch(attr.price) {
        case 0:
            price = "Free";
            break
        case 1:
            price = "$";
            break
        case 2: 
            price = "$$";
            break
        case 3:
            price = "$$$";
    }

    return (
        <div className="card">
            <div className="card-heading">
                <h3>{attr.name}</h3>
                <button className="button" onClick={() => rmAttr(attr.id)}>
                    <i class="fas fa-minus"></i>
                </button>
            </div>
            <div className="label">
                <div className="bold price-range">{price}</div>  
                <div>{attr.time} hours</div>
            </div>
            <div>{attr.description}</div>
        </div>
    );
}