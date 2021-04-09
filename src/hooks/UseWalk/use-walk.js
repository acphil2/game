import { useState } from 'react';

const useWalk = (maxSteps) => {
    const [positionX, setPositionX] = useState({x: 150});
    const [positionY, setPositionY] = useState({y: 300});
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

    const stepSize = 5;

    const modifier = {
        down: { x: 0, y: stepSize },
        left: { x: -stepSize, y: 0 },
        right: { x: stepSize, y: 0 },
        up: { x: 0, y: -stepSize }
    };

    function move(dir) {
        
        //THIS CODE IS AFFECTING LOWER CODE
        if(dir==='right'){
            if(
                //Floor 1
           ((positionY.y === 150 ||
            positionY.y === 145)&&
            positionX.x + modifier[dir].x < 575) 
           ||
                //Floor 2
           ((positionY.y === 300 ||
            positionY.y === 295)&&
            positionX.x + modifier[dir].x < 575)
           ||
                //Floor 3
           ((positionY.y === 445 ||
            positionY.y === 450) &&
            positionX.x + modifier[dir].x <= 575)
           ||
                // Floor 4
           ((positionY.y === 595||
            positionY.y === 600) &&
            positionX.x + modifier[dir].x < 575))
    
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
           ((positionY.y === 150 ||
            positionY.y === 145)&&
            positionX.x + modifier[dir].x > 0) 
           ||
                //Floor 2
           ((positionY.y === 300 ||
            positionY.y === 295)&&
            positionX.x + modifier[dir].x > -5)
           ||
                //Floor 3
           ((positionY.y === 445 ||
            positionY.y === 450) &&
            positionX.x + modifier[dir].x > 145 )
           ||
                // Floor 4
           ((positionY.y === 595||
            positionY.y === 600) &&
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
            if(positionX.x >= 510 && 
                positionX.x <= 555 && 
                positionY.y > 450){
                setStairRight(false);
                setStairLeft(false);
                setPositionY((prev) => ({
                    y: prev.y + modifier[dir].y
                }));
            } else if(positionX.x >= 410 && 
                positionX.x <= 455 && 
                positionY.y <= 300 &&
                positionY.y > 150
                ){
                setStairRight(false);
                setStairLeft(false);
                setPositionY((prev) => ({
                    y: prev.y + modifier[dir].y
                }));
            } else if ((positionX.x===150 && positionY.y===450)||
                (positionX.x===145 && positionY.y===450)||
                (positionX.x===150 && positionY.y===445) ||
                (positionX.x===145 && positionY.y===445) ||
                (positionX.x===155 && positionY.y===445) ||
                (positionX.x===155 && positionY.y===450) ||
                (positionX.x===140 && positionY.y===445) ||
                (positionX.x <= 145 && positionY.y <= 440 && positionY.y >= 305)
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
            if(positionX.x >= 510 && 
                positionX.x <= 555 && 
                positionY.y >= 445 && 
                positionY.y < 595 
                ){
                setStairRight(false);
                setStairLeft(false);
                setPositionY((prev) => ({
                    y: prev.y + modifier[dir].y
                }));
            }
            else if(positionX.x >= 410 && 
                positionX.x <= 455 && 
                positionY.y >= 145 && 
                positionY.y < 295 
                ){
                setStairRight(false);
                setStairLeft(false);
                setPositionY((prev) => ({
                    y: prev.y + modifier[dir].y
                }));
            } else if(
                (positionX.x === 0 && positionY.y === 295)||
                (positionX.x === 0 && positionY.y === 300)||
                (positionX.x === 5 && positionY.y === 300)||
                (positionX.x === 5 && positionY.y === 295)||
                (positionX.x === -5 && positionY.y === 300)||
                (positionX.x === -5 && positionY.y === 295)||
                (positionX.x >= 5 && positionY.y >= 305 && positionY.y <= 440)
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