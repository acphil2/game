import React from 'react';
import './Start.css';

const Start = ( props ) => {
    return(
        <div className='start'>
        	<div className='title'>Holly<br/><span className='title-size'>Haunted</span></div>
        	<div className='start-btn'>LOADING...</div>	
        	<div className='instructions'> Use spacebar to put candles out before they relight! <div className='outline'></div><br/> <br/> Use keyboard arrows to move around.</div>
        </div>
    );
}

export default Start;