import React from 'react';
import Logo from '../images/logo.svg'

function Navbar(){
    return(
     <nav className='navbar'>
                <div className='nav_logo'>
                <img src={Logo} width="50" alt='react logo' />
                <p className='react_nav'>ReactFacts</p>
                </div>
                <ul className='list_items'>
                    <li>React Course</li>
                    <li>-</li>
                    <li>Project</li>
                </ul>
            </nav>
    );
};

export default Navbar;