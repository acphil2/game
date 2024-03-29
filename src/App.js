import { useState, useEffect } from 'react';
import Start from './components/Start/Start';
import Player from './components/Player/Player';
import Candle from './components/Candle/Candle';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import Speaker from './components/Speaker/Speaker';
import GameOver from './components/GameOver/GameOver';
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

      //Game Over State
      const [gameOverState, setGameOverState] = useState(false);

      //Trick Candles Function 
      const relight = () => {
            if(canRelight===true){
                  //#6
                  if(
                  candleOut1===true 
                  && candleOut2===true 
                  && candleOut3===true 
                  && candleOut4===true
                  && candleOut5===true){
                        setCandleOut1(false);
                        setCandleOut2(false);
                        setCandleOut4(false);
                        setCanRelight(false);
                  }
                  //#5
                  else if(
                  candleOut1===true 
                  && candleOut2===true 
                  && candleOut3===true 
                  && candleOut4===true
                  && candleOut6===true){
                        setCandleOut6(false);
                        setCandleOut2(false);
                        setCandleOut4(false);
                        setCanRelight(false);
                  }
                  //#4
                  else if(
                  candleOut1===true 
                  && candleOut2===true 
                  && candleOut3===true 
                  && candleOut5===true
                  && candleOut6===true){
                        setCandleOut1(false);
                        setCandleOut2(false);
                        setCandleOut6(false);
                        setCanRelight(false);
                  }
                  //#3
                  else if(
                  candleOut1===true 
                  && candleOut2===true 
                  && candleOut4===true 
                  && candleOut5===true
                  && candleOut6===true){
                        setCandleOut1(false);
                        setCandleOut2(false);
                        setCandleOut4(false);
                        setCanRelight(false);
                  }
                  //#2
                  else if(
                  candleOut1===true 
                  && candleOut3===true 
                  && candleOut4===true 
                  && candleOut5===true
                  && candleOut6===true){
                        setCandleOut1(false);
                        setCandleOut5(false);
                        setCandleOut4(false);
                        setCanRelight(false);
                  }
                  //#1
                  else if(
                  candleOut2===true 
                  && candleOut3===true 
                  && candleOut4===true 
                  && candleOut5===true
                  && candleOut6===true){
                        setCandleOut2(false);
                        setCandleOut4(false);
                        setCandleOut6(false);
                        setCanRelight(false);
                  }
            }
      } 

      //ARROW KEYS AND SPACEBAR 
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
                  spacebarFunction();   
            }  
      });

      const spacebarFunction = () => {
            if((positionY.y===25)&&(positionX.x >= 34 && positionX.x <= 46)){
                        console.log('Candle 1 OUT');
                        setCandleOut1(true);
                        relight();
            } else if((positionY.y===50)&&(positionX.x >= 76 && positionX.x <= 90)){
                        console.log('Candle 2 OUT');
                        setCandleOut2(true);
                        relight();
            } else if((positionY.y===50)&&(positionX.x >= 14 && positionX.x <= 27)){
                        console.log('Candle 3 OUT');
                        setCandleOut3(true);
                        relight();
            } else if((positionY.y===75)&&(positionX.x >= 34 && positionX.x <= 46)){
                        console.log('Candle 4 OUT');
                        setCandleOut4(true);
                        relight();
            } else if((positionY.y===100)&&(positionX.x >= 72 && positionX.x <= 84)){
                        console.log('Candle 5 OUT');
                        setCandleOut5(true);
                        relight();
            } else if((positionY.y===100)&&(positionX.x >= 44 && positionX.x <= 56)){
                        console.log('Candle 6 OUT');
                        setCandleOut6(true);
                        relight();
            }
      }

      const handleClickRight = (e) => {
            walk('right');
      }

      const handleClickLeft = (e) => {
            walk('left');
      }

      const handleClickUp = (e) => {
            walk('up');
      }

      const handleClickDown = (e) => {
            walk('down');
      }

      const handleClickSpacebar = (e) => {
            spacebarFunction();
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

      //GAME OVER
      useEffect(() => {
            if(candleOut1===true
            && candleOut2===true
            && candleOut3===true
            && candleOut4===true
            && candleOut5===true
            && candleOut6===true
            && canRelight===false){
                  console.log('game over');
                  setGameOverState(true);
            }
      }, [candleOut1, candleOut2, candleOut3, candleOut4, candleOut5, candleOut6, canRelight]);

      if(gameOverState===false){
            return (
                  <div className='app'> 
                  	<div className='game'>
                              <Start/>
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
                              <Speaker/>
                              <div className='buttons'>
                                    <Button className='up' onClick={handleClickUp}><div className='triangle-up'></div></Button>
                                    <Button className='left' onClick={handleClickLeft}><div className='triangle-left'></div></Button>
                                    <Button className='right' onClick={handleClickRight}><div className='triangle-right'></div></Button>
                                    <Button className='spacebar' onClick={handleClickSpacebar}></Button>
                                    <Button className='down' onClick={handleClickDown}><div className='triangle-down'></div></Button>
                              </div>
                              <Header className='gold-right'>Holly Haunted</Header>
                        </span>
                  </div>
         	);
      } else if(gameOverState===true){
            return (
                  <div className='app'> 
                        <div className='game'>
                              <GameOver/>
                        </div>
                        <span className='header-logo'>
                              <Speaker/>
                              <div className='buttons noselect'>
                                    <Button className='up noselect' onClick={handleClickUp}><div className='triangle-up noselect'></div></Button>
                                    <Button className='left noselect' onClick={handleClickLeft}><div className='triangle-left noselect'></div></Button>
                                    <Button className='right noselect' onClick={handleClickRight}><div className='triangle-right noselect'></div></Button>
                                    <Button className='spacebar noselect' onClick={handleClickSpacebar}></Button>
                                    <Button className='down noselect' onClick={handleClickDown}><div className='triangle-down noselect'></div></Button>
                              </div>
                              <Header className='gold-right'>Holly Haunted</Header>
                        </span>
                  </div>
            );      
      }
}

