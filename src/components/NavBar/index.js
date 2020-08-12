import React from 'react';
import './index.scss';

const NavBar = ({openNavigation}) => {
    return (
        <div className="navbar__wrapper">
            <div className="navbar">
                <h1 className="navbar__header">Viktor</h1>
                <div className="navbar__menu">
                    <p className="navbar__menu__item--selected" onClick={openNavigation}>Start</p>
                    <p className="navbar__menu__item">Your Cart</p>
                    <p className="navbar__menu__item">Favourites</p>
                    <p className="navbar__menu__item">Your Orders</p>
                </div>
                <hr className="navbar__dash"/>
                <h2 className="navbar__sign-out">Sign Out</h2>
            </div>
        </div>
    )
}

export default NavBar;
