import React from 'react';
import './Start.css';

const Start = ( props ) => {
    return(
        <div className='start'>
        	<div className='title'>Holly Haunted</div>	
        	<div className='instructions'> Use keyboard arrows  or button pad to move character. <br/><br/>Use spacebar key or center button on pad below to put the candles out.</div>
        	<div className='start-btn'></div>
        </div>
    );
}

export default Start;