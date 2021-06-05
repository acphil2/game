import React from 'react';
import './Start.css';

const Start = ( props ) => {
    return(
        <div className='start'>
        	<div className='title'>Holly<br/><span className='title-size'>Haunted</span></div>
        	<div className='start-btn'>LOADING...</div>	
        	<div className='instructions'> Put out all of the candles! <div className='outline'></div><br/> <br/> Use spacebar and keyboard arrows or the buttons below.</div>
        </div>
    );
}

export default Start;