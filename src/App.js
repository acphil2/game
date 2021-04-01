import React from 'react';
import Player from './components/Player/Player';
import CandleOdd from './components/CandleOdd/CandleOdd';
import CandleEven from './components/CandleEven/CandleEven';
import './App.css';

export default function App(props) {
   return (
      	<div className="game">
            	{/* directions, button */}
                  <Player/>
                  <CandleOdd id='candle1' style= {{
                  	top: '25%',
                  	left: '40%'
                  }}
                  />
                  <CandleEven id='candle2' style= {{
                  	top: '50%',
                  	left: '82%'
                  }}/>
                  <CandleOdd id='candle3' style= {{
                  	top: '50%',
                  	left: '20%'
                  }}/>
                  <CandleEven id='candle4' style= {{
                  	top: '75%',
                  	left: '40%'
                  }}/>
                  <CandleOdd id='candle5' style= {{
                  	top: '100%',
                  	left: '50%'
                  }}/>
                  <CandleEven id='candle6' className='candle-flicker'
                        style= {{
                  	top: '100%',
                  	left: '78%'
                  }}
                  />
      	</div>
   	);
}

