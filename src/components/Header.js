import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
        <div className="header__left"><p>Free shipping for standard order over Rs.1000</p></div>
        <div className="header__right">
          <li className="header__right__item"><p>My Account</p></li>
          <li className="header__right__item"><p>Help & FAQ's</p></li>
          <li className="header__right__item"><p>EN</p></li>
          <li className="header__right__item"><p>NPR</p></li>
        </div>
      </div>
    )
}

export default Header;