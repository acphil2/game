import React from 'react';

const Sprite = ({ image, data, positionX, positionY }) => {
    const { y, x, h, w } = data;
    return (
        <div 
            style={{
                position: 'absolute',
                top: `${positionY.y}%`,
                left: `${positionX.x}%`,
                height: `${h}px`,
                width: `${w}px`,
                marginTop: `-${h}px`,
                marginRight: `${w}px`,
                backgroundImage: `url(${image})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: `-${x}px -${y}px`,
                zIndex: '4'
            }}>
        </div>
    );
}
 
export default Sprite;
