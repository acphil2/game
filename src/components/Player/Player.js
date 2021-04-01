import React from 'react';
import Actor from '../Actor/Actor';
import useKeyPress from './../../hooks/UseKeyPress/use-key-press.js';
import useWalk from './../../hooks/UseWalk/use-walk.js';


const Player = () => {
    const { dir, step, walk, position } = useWalk(2);
    const data = {
        h: '50',
        w: '25'
    };
    
    
    useKeyPress((e) => {
        if(e.key==='ArrowRight' || 
        e.key==='ArrowLeft' || 
        e.key==='ArrowDown' ||
        e.key==='ArrowUp') {
            walk(e.key.replace('Arrow', '').toLowerCase());
        }
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