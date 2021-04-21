import { useState, useEffect } from 'react';
import Player from './components/Player/Player';
import Candle from './components/Candle/Candle';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import useKeyPress from './hooks/UseKeyPress/use-key-press.js';
import useWalk from './hooks/UseWalk/use-walk.js';
import './App.css';

export default function App(props) {
      //Character Movement and Position
      const { dir, step, walk, positionX, positionY } = useWalk(2);

      //Candle Flickering States
      const [toggleClass1, setToggleClass1] = useState(true);   
      const [toggleClass2, setToggleClass2] = useState(true);   
      const [toggleClass3, setToggleClass3] = useState(true);   
      const [toggleClass4, setToggleClass4] = useState(true);   
      const [toggleClass5, setToggleClass5] = useState(true);   
      const [toggleClass6, setToggleClass6] = useState(true);    

      //Candle Out States
      const [candleOut1, setCandleOut1] = useState(false);   
      const [candleOut2, setCandleOut2] = useState(false);
      const [candleOut3, setCandleOut3] = useState(false);
      const [candleOut4, setCandleOut4] = useState(false);
      const [candleOut5, setCandleOut5] = useState(false);
      const [candleOut6, setCandleOut6] = useState(false);

      //Relight Trick Candle State (so it won't run more than once)
      const [canRelight, setCanRelight] = useState(true);

      //Trick Candles Function 
      const relight = () => {
            if(canRelight===true){
                  if(candleOut1===true 
                  && candleOut2===true 
                  && candleOut3===true 
                  && candleOut4===true){
                        setCandleOut1(false);
                        setCandleOut2(false);
                        setCandleOut4(false);
                        setCanRelight(false);
                  }
            }
      }  

      //Candle1
      useEffect(() => {
            if(candleOut1===false){
                  const interval = setInterval(() => {
                        setToggleClass1(toggleClass1 => toggleClass1===false);
                  }, 500);                  
                  return () => clearInterval(interval);
            }
      }, [candleOut1]);

      //Candle 2
      useEffect(() => {
            if(candleOut2===false){
                  const interval = setInterval(() => {
                        setToggleClass2(toggleClass2 => toggleClass2===false);
                  }, 250);
                  return () => clearInterval(interval);
            }
      }, [candleOut2]);

      //Candle 3 
      useEffect(() => {
            if(candleOut3===false){
                  const interval = setInterval(() => {
                        setToggleClass3(toggleClass3 => toggleClass3===false);
                  }, 500);
                  return () => clearInterval(interval);
            }
      }, [candleOut3]);

      //Candle 4 
      useEffect(() => {
            if(candleOut4===false){
                  const interval = setInterval(() => {
                        setToggleClass4(toggleClass4 => toggleClass4===false);
                  }, 250);
                  return () => clearInterval(interval);
            }
      }, [candleOut4]);

      //Candle 5 
      useEffect(() => {
            if(candleOut5===false){
                  const interval = setInterval(() => {
                        setToggleClass5(toggleClass5 => toggleClass5===false);
                  }, 250);
                  return () => clearInterval(interval);
            }
      }, [candleOut5]);

      //Candle 6 
      useEffect(() => {
            if(candleOut6===false){
                  const interval = setInterval(() => {
                        setToggleClass6(toggleClass6 => toggleClass6===false);
                  }, 500);
                  return () => clearInterval(interval);
            }
      }, [candleOut6]);

      useKeyPress((e) => {
            //Movement
            if(e.key==='ArrowRight' || 
            e.key==='ArrowLeft' || 
            e.key==='ArrowDown' ||
            e.key==='ArrowUp') {
                  walk(e.key.replace('Arrow', '').toLowerCase());
            } 

            //Spacebar
            else if(e.keyCode===32){
                  if((positionY.y===25)&&(positionX.x >= 35 && positionX.x <= 45)){
                        console.log('Candle 1 OUT');
                        setCandleOut1(true);
                  } else if((positionY.y===50)&&(positionX.x >= 78 && positionX.x <= 88)){
                        console.log('Candle 2 OUT');
                        setCandleOut2(true);
                  } else if((positionY.y===50)&&(positionX.x >= 15 && positionX.x <= 25)){
                        console.log('Candle 3 OUT');
                        setCandleOut3(true);
                  } else if((positionY.y===75)&&(positionX.x >= 35 && positionX.x <= 45)){
                        console.log('Candle 4 OUT');
                        setCandleOut4(true);
                  } else if((positionY.y===100)&&(positionX.x >= 73 && positionX.x <= 83)){
                        console.log('Candle 5 OUT');
                        setCandleOut5(true);
                        relight();
                  } else if((positionY.y===100)&&(positionX.x >= 45 && positionX.x <= 55)){
                        console.log('Candle 6 OUT');
                        setCandleOut6(true);
                  }
            }  
      });

      return (
            <div className='app'> 
            	<div className='game'>
                  	{/* directions, button */}
                        <Player   
                              step={step} 
                              dir={dir}
                              positionX={positionX}
                              positionY={positionY} 
                        />

                        <Candle 
                              id='candle1' 
                              className={`candle-sprite ${toggleClass1 ? 'candle-flicker' : null} ${candleOut1 ? 'candle-out' : null}`}
                              style= {{
                        	top: '25%',
                        	left: '40%'
                        }}/>

                        <Candle 
                              id='candle2' 
                              className={`candle-sprite ${toggleClass2 ? 'candle-flicker' : null} ${candleOut2 ? 'candle-out' : null}`}
                              style= {{
                              	top: '50%',
                              	left: '82%'
                              }}
                        />

                        <Candle 
                              id='candle3' 
                              className={`candle-sprite ${toggleClass3 ? 'candle-flicker' : null} ${candleOut3 ? 'candle-out' : null}`}
                              style= {{
                        	     top: '50%',
                        	     left: '20%'
                              }}
                        />

                        <Candle 
                              id='candle4' 
                              className={`candle-sprite ${toggleClass4 ? 'candle-flicker' : null} ${candleOut4 ? 'candle-out' : null}`}
                              style= {{
                              	top: '75%',
                              	left: '40%'
                              }}
                        />

                        <Candle 
                              id='candle5' 
                              className={`candle-sprite ${toggleClass5 ? 'candle-flicker' : null} ${candleOut5 ? 'candle-out' : null}`}
                              style= {{
                        	     top: '100%',
                        	     left: '78%'
                              }}
                        />

                        <Candle 
                              id='candle6' 
                              className={`candle-sprite ${toggleClass6 ? 'candle-flicker' : null} ${candleOut6 ? 'candle-out' : null}`}
                              style= {{
                                   top: '100%',
                                   left: '50%'
                              }}
                        />
            	</div>
                  <span className='header-logo'>
                        <div className='buttons'>
                              <Button className='up'><div className='triangle-up'></div></Button>
                              <Button className='left'><div className='triangle-left'></div></Button>
                              <Button className='right'><div className='triangle-right'></div></Button>
                              <Button className='spacebar'></Button>
                              <Button className='down'><div className='triangle-down'></div></Button>
                        </div>
                        <Header/>
                  </span>
            </div>
   	);
}

