import React from 'react';
import Sprite from '../Sprite/Sprite';

const Actor = ({ 
    data, 
    position = { x: 0, y: 0  },
    step = 0, 
    dir = 0
    }) => {
    
    const{ h, w } = data; 
    
    return (
        <Sprite 
            image={'Sprites/spritesheet.png'}
            position={position}
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