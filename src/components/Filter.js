import React from 'react';


export default function Filter({ setTime, setPrice, price }) {
   
    return (
        <div className="navbar">
            <h1 className="navbar-heading">Welcome to Paris</h1>
            <div className="filters">
                <div className="time">Total Amount of Time {" "}
                    <select name="time"
                        onChange={(e) => setTime(parseInt(e.target.value))}>
                        <option>{" "}</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={6}>6</option>
                        <option value={8}>8</option>
                        <option value={10}>10</option>
                        <option value={12}>12</option>
                        <option value={16}>16</option>
                    </select>  
                </div>
                <div>Price: {" "}
                    <button 
                        className={`price ${price === 0 ? "pink" : ""}`}
                        value={0} 
                        onClick={(e) => setPrice(parseInt(e.target.value))}>
                        Free
                    </button>
                    <button 
                        className={`price ${price === 1 ? "pink" : ""}`}
                        value={1}
                        onClick={(e) => setPrice(parseInt(e.target.value))}>
                        $
                    </button>
                    <button 
                        className={`price ${price === 2 ? "pink" : ""}`}
                        value={2}
                        onClick={(e) => setPrice(parseInt(e.target.value))}>
                        $$
                    </button>
                    <button 
                        className={`price ${price === 3 ? "pink" : ""}`}
                        value={3}
                        onClick={(e) => setPrice(parseInt(e.target.value))}>
                        $$$
                    </button>
                </div>
            </div>
        </div>
    );
}