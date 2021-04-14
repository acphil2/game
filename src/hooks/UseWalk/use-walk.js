import { useState } from 'react';

const useWalk = (maxSteps) => {
    const [positionX, setPositionX] = useState({ x: 25 });
    const [positionY, setPositionY] = useState({ y: 25 });
    const [dir, setDir] = useState(2);
    const [stairRight, setStairRight] = useState(false);
    const [stairLeft, setStairLeft] = useState(false);
    const [step, setStep] = useState(0);
    const directions = {
        down: 0,
        left: 1,
        right: 2,
        up: 3
    };

    const stepSize = 1;

    const modifier = {
        down: { x: 0, y: stepSize },
        left: { x: -stepSize, y: 0 },
        right: { x: stepSize, y: 0 },
        up: { x: 0, y: -stepSize }
    };

    function move(dir) {
        
        if(dir==='right'){
            if(
                //Floor 1
           (positionY.y === 25 &&
            positionX.x + modifier[dir].x < 98) 
           ||
                //Floor 2
           (positionY.y === 50 &&
            positionX.x + modifier[dir].x < 98)
           ||
                //Floor 3
           (positionY.y === 75 &&
            positionX.x + modifier[dir].x < 98)
           ||
                // Floor 4
           (positionY.y === 100 &&
            positionX.x + modifier[dir].x < 98))
            {   
                setStairRight(false);
                setStairLeft(false);
                setPositionX((prev) => ({
                    x: prev.x + modifier[dir].x
                }));
            }            
        } 
        if(dir==='left'){
            if(
                //Floor 1
           (positionY.y === 25 &&
            positionX.x + modifier[dir].x > 0) 
           ||
                //Floor 2
           (positionY.y === 50 &&
            positionX.x + modifier[dir].x > 0)
           ||
                //Floor 3
           (positionY.y === 75 &&
            positionX.x + modifier[dir].x > 25 )
           ||
                // Floor 4
           (positionY.y === 100 &&
            positionX.x + modifier[dir].x > 0))
    
            {   
                setStairRight(false);
                setStairLeft(false);
                setPositionX((prev) => ({
                    x: prev.x + modifier[dir].x
                }));
            }            
        }
        else if (dir==='up') {
            if(positionX.x >= 70 && 
                positionX.x <= 75 && 
                positionY.y > 25){
                setStairRight(false);
                setStairLeft(false);
                setPositionY((prev) => ({
                    y: prev.y + modifier[dir].y
                }));
            } else if(positionX.x >= 86 && 
                positionX.x <= 92 && 
                positionY.y > 75
                ){
                setStairRight(false);
                setStairLeft(false);
                setPositionY((prev) => ({
                    y: prev.y + modifier[dir].y
                }));
            } else if ((positionX.x===26 && positionY.y===75)||
                (positionX.x <= 25 && positionY.y > 50)
                ){  
                    setStairRight(false);
                    setStairLeft(true);
                    setPositionY((prev) => ({
                        y: prev.y + modifier['up'].y
                    }));
                    setPositionX((prev) => ({
                        x: prev.x + modifier['left'].x
                    }));
                }
            } 

        else if (dir==='down') {
            if(positionX.x >= 70 && 
                positionX.x <= 75 && 
                positionY.y < 50 
                ){
                setStairRight(false);
                setStairLeft(false);
                setPositionY((prev) => ({
                    y: prev.y + modifier[dir].y
                }));
            }
            else if(positionX.x >= 86 && 
                positionX.x <= 92 && 
                positionY.y < 100 
                ){
                setStairRight(false);
                setStairLeft(false);
                setPositionY((prev) => ({
                    y: prev.y + modifier[dir].y
                }));
            } else if(
                (positionX.x === 1 && positionY.y === 50)||
                (positionX.x >= 2 && positionY.y < 75 && positionY.y >= 51)
                ){
                setStairRight(true);
                setStairLeft(false);
                setPositionY((prev) => ({
                    y: prev.y + modifier['down'].y
                }));
                setPositionX((prev) => ({
                    x: prev.x + modifier['right'].x
                }));
            }
        }
    }

    function walk(dir) {
        setDir(prev => {
            if (stairRight === true){
                setDir(2);
                move(dir);
                return directions[dir]; 
            }
            else if (stairLeft === true){
                setDir(1);
                move(dir);
                return directions[dir]; 
            }
            else {
                if(directions[dir] === prev) move(dir);
                return directions[dir];
            }
        });
        setStep((prev) => (prev < maxSteps -1 ? prev + 1 : 0));
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