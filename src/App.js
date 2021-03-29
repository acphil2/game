import React from 'react';
import Player from './components/Player/Player';
import Candle from './components/Candle/Candle';
import './App.css';

export default function App() {
   return (
      	<div className="game">
      		{/* directions, button */}
            <Player/>
            <Candle/>
      	</div>
   	);
}

