import React from 'react';
import Sprite from '../Sprite/Sprite';

const Actor = ({ 
    data, 
    positionX = { x: 0 },
    positionY = { y: 0 },
    step = 0, 
    dir = 0
    }) => {
    
    const{ h, w } = data; 
    
    return (
        <Sprite 
            image={process.env.PUBLIC_URL + '/Sprites/spritesheet.png'}
            positionX={positionX}
            positionY={positionY}
            data={{
                x: step * w,
                y: dir * h,
                w,
                h
            }}
        />
    );
}

export default Actor;