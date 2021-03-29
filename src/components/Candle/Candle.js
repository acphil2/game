import { useState, useEffect } from 'react';
import './Candle.css';

const Candle = () => {
    const [toggleClass, setToggleClass] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setToggleClass(toggleClass => toggleClass===false);
    }, 500);
        return () => clearInterval(interval);
    }, []);

    return(
	<div className={`candle-sprite ${toggleClass ? 'candle-flicker' : null}`} 
	>

	</div>
    );
}

export default Candle;

