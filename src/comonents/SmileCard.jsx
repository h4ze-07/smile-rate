import { useState } from "react";

const SmileCard = ({smile}) => {

    const handleClick = () => {
        smile.func(pr => pr + 1)
    }

    return (
        <div className="smileContainer">
            <h2 className="smile">{smile.smile}</h2>
            <h3>{smile.counter}</h3>
            <button className="rateBtn" 
            onClick={handleClick}
            >Rate it!</button>
        </div>
    );
}

export default SmileCard;
