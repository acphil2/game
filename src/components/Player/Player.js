import React from 'react';
import Actor from '../Actor/Actor';
import useKeyPress from './../../hooks/UseKeyPress/use-key-press.js';
import useWalk from './../../hooks/UseWalk/use-walk.js';


const Player = ( props ) => {
    const { dir, step, walk, positionX, positionY } = useWalk(2);
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
        } else if(e.keyCode===32){
            if((positionY.y===150||positionY.y===145)&&(positionX.x >= 210 && positionX.x <= 270)){
                console.log('Candle 1 OUT');
            } else if((positionY.y===300||positionY.y===295)&&(positionX.x >= 460 && positionX.x <= 520)){
                console.log('Candle 2 OUT');
            } else if((positionY.y===300||positionY.y===295)&&(positionX.x >= 90 && positionX.x <= 150)){
                console.log('Candle 3 OUT');
            } else if((positionY.y===450||positionY.y===445)&&(positionX.x >= 210 && positionX.x <= 270)){
                console.log('Candle 4 OUT');
            } else if((positionY.y===600||positionY.y===595)&&(positionX.x >= 440 && positionX.x <= 500)){
                console.log('Candle 5 OUT');
            } else if((positionY.y===600||positionY.y===595)&&(positionX.x >= 270 && positionX.x <= 330)){
                console.log('Candle 6 OUT');
            }
        }  
    });


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