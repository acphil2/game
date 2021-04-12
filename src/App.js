import { useState, useEffect } from 'react';
import Player from './components/Player/Player';
import Candle from './components/Candle/Candle';
import useKeyPress from './hooks/UseKeyPress/use-key-press.js';
import useWalk from './hooks/UseWalk/use-walk.js';
import './App.css';

export default function App(props) {
      const { dir, step, walk, positionX, positionY } = useWalk(2);
      const [toggleClassOdd, setToggleClassOdd] = useState(true);
      const [toggleClassEven, setToggleClassEven] = useState(true);

      //Odd Candles
      useEffect(() => {
            const interval = setInterval(() => {
                  setToggleClassOdd(toggleClassOdd => toggleClassOdd===false);
            }, 500);
            return () => clearInterval(interval);
      }, [toggleClassOdd]);

      //Even Candles
      useEffect(() => {
            const interval = setInterval(() => {
                  setToggleClassEven(toggleClassEven => toggleClassEven===false);
            }, 250);
            return () => clearInterval(interval);
      }, [toggleClassEven]);

      useKeyPress((e) => {
            if(e.key==='ArrowRight' || 
            e.key==='ArrowLeft' || 
            e.key==='ArrowDown' ||
            e.key==='ArrowUp') {
                  walk(e.key.replace('Arrow', '').toLowerCase());
            } 
            else if(e.keyCode===32){
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

      return (
      	<div className='game'>
            	{/* directions, button */}
                  <Player   
                        step={step} 
                        dir={dir}
                        positionX={positionX}
                        positionY={positionY} 
                  />

                  <Candle id='candle1' 
                        className={`candle-sprite ${toggleClassOdd ? 'candle-flicker' : null}`}
                        style= {{
                  	top: '25%',
                  	left: '40%'
                  }}/>

                  <Candle id='candle2' 
                        className={`candle-sprite ${toggleClassEven ? 'candle-flicker' : null}`}
                        style= {{
                        	top: '50%',
                        	left: '82%'
                        }}
                  />

                  <Candle id='candle3' 
                        className={`candle-sprite ${toggleClassOdd ? 'candle-flicker' : null}`}
                        style= {{
                  	     top: '50%',
                  	     left: '20%'
                        }}
                  />

                  <Candle id='candle4' 
                        className={`candle-sprite ${toggleClassEven ? 'candle-flicker' : null}`}
                        style= {{
                        	top: '75%',
                        	left: '40%'
                        }}
                  />

                  <Candle id='candle5' 
                        className={`candle-sprite ${toggleClassOdd ? 'candle-flicker' : null}`}
                        style= {{
                  	     top: '100%',
                  	     left: '50%'
                        }}
                  />

                  <Candle id='candle6' 
                        className={`candle-sprite ${toggleClassEven ? 'candle-flicker' : null}`}
                        style= {{
                  	     top: '100%',
                  	     left: '78%'
                        }}
                  />
      	</div>
   	);
}

