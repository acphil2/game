import { useState, useEffect } from 'react';
import './Candle.css';

const Candle = ( props ) => {
    const [toggleClass, setToggleClass] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setToggleClass(toggleClass => toggleClass===false);
        }, 500);
        return () => clearInterval(interval);
    }, [toggleClass]);

    return(
    	<div className={`candle-sprite ${toggleClass ? 'candle-flicker' : null}`}
        style={props.style}
        >
    	</div>
    );
}

export default Candle;

