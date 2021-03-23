import { useState } from 'react';

const useWalk = (maxSteps) => {
    /* X and Y position starts on top floor*/
    const [position, setPosition] = useState({x: 1, y: 150});
    
    /* Character Direction Facing*/
    const [dir, setDir] = useState(2);

    /* Step of the Animation */
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
        if(((position.x + modifier[dir].x > 0) 
            && (position.y+ modifier[dir].y === 150) 
            && (position.x + modifier[dir].x < 575))
            ||
            ((position.x + modifier[dir].x > 415) 
            && (position.x + modifier[dir].x < 460)
            && (position.y+ modifier[dir].y >= 150)
            && (position.y+ modifier[dir].y < 300))
            ){
            setPosition((prev) => ({
                x: prev.x + modifier[dir].x,
                y: prev.y + modifier[dir].y
            }));
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