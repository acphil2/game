import React from 'react';
import Player from './components/Player/Player';
import Candle from './components/Candle/Candle';
import './App.css';

export default function App(props) {
   return (
      	<div className="game">
      		{/* directions, button */}
            <Player/>
            <Candle style= {{
            	top: '25%',
            	left: '40%'
            }}
            />
            <Candle style= {{
            	top: '50%',
            	left: '82%'
            }}/>
            <Candle style= {{
            	top: '50%',
            	left: '20%'
            }}/>
            <Candle style= {{
            	top: '75%',
            	left: '40%'
            }}/>
            <Candle style= {{
            	top: '100%',
            	left: '50%'
            }}/>
            <Candle style= {{
            	top: '100%',
            	left: '78%'
            }}
            />
      	</div>
   	);
}

