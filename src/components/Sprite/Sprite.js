import React from 'react';

const Sprite = ({ image, data, position }) => {
    const { y, x, h, w } = data;
  	return (
    	<div 
    		style={{
                position: 'relative',
                top: position.y,
                left: position.x,
    			height: `${h}px`,
    			width: `${w}px`,
                backgroundImage: `url(${image})`,
    			backgroundRepeat: 'no-repeat',
				backgroundPosition: `-${x}px -${y}px`
    		  }}
    		>
    	</div>
  	);
}
 
export default Sprite;
