import React from 'react';
import Actor from '../Actor/Actor';
import useKeyPress from './../../hooks/UseKeyPress/use-key-press.js';

const Player = () => {
	const data = {
    	h: 50,
        w: 25
    };

    useKeyPress((e) => {
    	const dir = e.key.replace('Arrow', '').toLowerCase()
    	console.dir(dir);
    	e.preventDefault();
    });

    return <Actor data={data}/>
	
}

export default Player;