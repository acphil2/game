import React from 'react';
import './GameOver.css';

const GameOver = ( props ) => {
    return(
        <div className='game-over'>
        	<div className='words'>Level 2<br/><br/>Coming Soon</div>
        	<div className='end-character'></div>
        	<div className='play-again'>PLAY AGAIN</div>
        </div>
    );
}

export default GameOver;