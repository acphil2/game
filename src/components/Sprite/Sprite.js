import React from 'react';

const Sprite = ({ image, data, positionX, positionY }) => {
    const { y, x, h, w } = data;
  	return (
    	<div 
    		style={{
                position: 'relative',
                top: positionY.y,
                left: positionX.x,
    			height: `${h}px`,
    			width: `${w}px`,
                marginTop: `-${h}px`,
                backgroundImage: `url(${image})`,
    			backgroundRepeat: 'no-repeat',
				backgroundPosition: `-${x}px -${y}px`
    		  }}
    		>
    	</div>
  	);
}
 
export default Sprite;
