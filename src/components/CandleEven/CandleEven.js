import { useState, useEffect } from 'react';
import './CandleEven.css';

const CandleEven = ( props ) => {
    const [toggleClass, setToggleClass] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setToggleClass(toggleClass => toggleClass===false);
        }, 250);
        return () => clearInterval(interval);
    }, [toggleClass]);

    return(
        <div className={`candle-sprite ${toggleClass ? 'candle-flicker' : null}`}
        style={props.style}
        >
        </div>
    );
}

export default CandleEven;