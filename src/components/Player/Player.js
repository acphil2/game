import React from 'react';
import Actor from '../Actor/Actor';

const Player = ( { dir, step, walk, positionX, positionY } ) => {
    const data = {
        h: '50',
        w: '25'
    };

    return( 
        <Actor 
            data={data} 
            step={step} 
            dir={dir}
            positionX={positionX}
            positionY={positionY} 
        />
    );
}

export default Player;