import React from 'react';
import './Button.css';

const Button = ( props ) => {

    return(
        <div className='button' className={props.className} >	
        {props.children}
        </div>
    );
}

export default Button;