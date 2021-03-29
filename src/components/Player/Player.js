import React from 'react';
import Actor from '../Actor/Actor';
import useKeyPress from './../../hooks/UseKeyPress/use-key-press.js';
import useWalk from './../../hooks/UseWalk/use-walk.js';


const Player = () => {
	const { dir, step, walk, position } = useWalk(2);
	const data = {
    	h: 8.33,
        w: 4.16666
    };
    
    useKeyPress((e) => {
    	walk(e.key.replace('Arrow', '').toLowerCase());
        e.preventDefault();
    });

    return( 
    	<Actor 
    		data={data} 
    		step={step} 
    		dir={dir}
    		position={position}
    	/>
    );
}

export default Player;