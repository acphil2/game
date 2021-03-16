import React from 'react';
import Sprite from '../Sprite/Sprite';

const Actor = ({ data, step = 0, dir = 0 }) => {
	const{ h, w } = data; 
	return (
		<Sprite 
            image={'Sprites/spritesheet.png'}
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