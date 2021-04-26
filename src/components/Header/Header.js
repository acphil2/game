import React from 'react';
import './Header.css';

const Header = ( props ) => {

    return(
    	<div className={props.className}>
    	{props.children}
        </div>
    );
}

export default Header;