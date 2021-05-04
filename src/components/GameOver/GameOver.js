import React from 'react';
import './GameOver.css';

const GameOver = ( props ) => {
	
	const refreshPage = () => { 
    	window.location.reload(); 
	}
	
    return(
        <div className='game-over'>
        	<div className='words'>Level 2<br/><br/>Coming Soon</div>
        	<div className='end-character'></div>
        	<div className='play-again' onClick={ refreshPage }>PLAY AGAIN</div>
        </div>
    );
}

export default GameOver;