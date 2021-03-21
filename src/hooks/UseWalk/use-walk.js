import { useState } from 'react';

const useWalk = (maxSteps) => {
	const [positionX, setPositionX] = useState({ x: 0 });
    const [positionY, setPositionY] = useState({ y: 150 });
	const [dir, setDir] = useState(2);
	const [step, setStep] = useState(0);
	const directions = {
    	down: 0,
    	left: 1,
    	right: 2,
    	up: 3
    };

    const stepSize = 8;

    const modifier = {
    	down: { x: 0, y: stepSize },
    	left: { x: -stepSize, y: 0 },
    	right: { x: stepSize, y: 0 },
    	up: { x: 0, y: -stepSize }
    };

    function walk(dir) {
    	setDir(prev => {
    		if(directions[dir] === prev) move(dir);
    		return directions[dir];
    	});
    	setStep((prev) => (prev < maxSteps -1 ? prev + 1 : 0));
    }

    function move(dir) {
        if(positionX.x >= 0 && positionY.y===150){
        	setPositionX((prev) => ({
        		x: prev.x + modifier[dir].x,
        	}));
        }
        if(positionX.x >= 415 && positionX.x <= 460 && positionY.y >= 150){   
            setPositionY((prev) => ({
                y: prev.y + modifier[dir].y
            }));
        }
    }

    return {
    	walk, 
    	dir, 
    	step,
    	positionX,
        positionY
    };
}

export default useWalk;