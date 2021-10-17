import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <NavLink to='/article'>SHARETRADE.com</NavLink>
        </header>
    )
}

export default Header;