import React from 'react';
import './Header.css'
import logo from '../assets/Image/logo.png'

const Header = () => {
    return (
        <div className='navbar'>
            <div className='logoSection'>
                <img className='logo' src={logo} alt="logo" />
                <h2><span>P</span>roduct<span>L</span>ist</h2>
            </div>
            <nav>
                <ul className='manuList'>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Service</a>
                    </li>
                    <li>
                        <a href="#">Login</a>
                    </li>
                    <li>
                        <a href="#">Sign Up</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;