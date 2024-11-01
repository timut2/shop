import './Styles/Header.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
function Header() {
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000);
    
        return () => {
          clearInterval(timer);
        };
      }, []);
    return (
        <header className="header">
            <nav className='header-nav'>
                <ul className="nav-links">
                <li><Link to="/">ДОМОЙ</Link></li>
                <li><Link to="/cart">КОРЗИНА</Link></li>
                <li><Link to="/info">ИНФОРМАЦИЯ</Link></li>
                </ul>
            </nav>
            <div className='current-time'>
            <p>{currentTime.toLocaleTimeString()}</p>
            </div>
        </header>
       
    );
}

export default Header;
