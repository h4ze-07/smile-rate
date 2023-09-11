import { useState } from "react";

const SmileCard = ({smile, handler}) => {

    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        setCounter(counter + 1)
        handler(counter + 1)
    }

    return (
        <div className="smileContainer">
            <h2 className="smile">{smile}</h2>
            <h3>{counter}</h3>
            <button className="rateBtn" 
            onClick={handleClick}
            >Rate it!</button>
        </div>
    );
}

export default SmileCard;
