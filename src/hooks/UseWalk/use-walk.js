import { useState } from 'react';

const useWalk = (maxSteps) => {
    /* X and Y position starts on top floor*/
    const [position, setPosition] = useState({x: 0, y: 150});
    
    /* Character Direction Facing*/
    const [dir, setDir] = useState(2);

    const [stairRight, setStairRight] = useState(false);
    const [stairLeft, setStairLeft] = useState(false);

    /* Step of the Animation */
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

    function move(dir) {
        if(((position.x + modifier[dir].x >= 0) 
            && (position.y+ modifier[dir].y === 150) 
            && (position.x + modifier[dir].x <= 575))
            ||
            ((position.x + modifier[dir].x >= 415) 
            && (position.x + modifier[dir].x <= 460)
            && (position.y+ modifier[dir].y >= 150)
            && (position.y+ modifier[dir].y <= 300))
            ||
            ((position.x + modifier[dir].x >= 0) 
            && (position.y+ modifier[dir].y === 300)
            && (position.x + modifier[dir].x <= 575))
            ||
            ((position.x + modifier[dir].x >= 150) 
            && (position.y+ modifier[dir].y === 450)
            && (position.x + modifier[dir].x <= 575))
            ||
            ((position.x + modifier[dir].x >= 515) 
            && (position.x + modifier[dir].x <= 560)
            && (position.y+ modifier[dir].y >= 450)
            && (position.y+ modifier[dir].y <= 600))
            ||
            ((position.x + modifier[dir].x >= 0) 
            && (position.y+ modifier[dir].y === 600)
            && (position.x + modifier[dir].x <= 575))
        ){
            setStairRight(false);
            setStairLeft(false);
            setPosition((prev) => ({
                x: prev.x + modifier[dir].x,
                y: prev.y + modifier[dir].y
            }));
        } 
        else if(((position.x === 0 && position.y === 300) 
        || (position.x >= 0 && position.x <= 150 && position.y >= 300 && position.y < 450)) && ((directions[dir]===0))){
            setStairRight(true);
            setStairLeft(false);
            setPosition((prev) => ({
                x: prev.x + stepSize,
                y: prev.y + stepSize
            })) 
        }
        else if(position.x <= 150 && position.y <= 450 && position.y > 300 && directions[dir]===3){
            setStairLeft(true);
            setStairRight(false);
            setPosition((prev) => ({
                x: prev.x - stepSize,
                y: prev.y - stepSize
            })) 
        }
    }

    return {
        walk, 
        dir, 
        step,
        position
    };
}

export default useWalk;