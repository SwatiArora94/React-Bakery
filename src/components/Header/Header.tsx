import React from "react";
import './Header.scss';
import logo from './logo.svg'
import CartIcon from "components/CartIcon/CartIcon";

export const Header = () => (
    <header className="header">
        <div className="container">
            <div className="headerLogo">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <CartIcon />
        </div>
    </header>
    );

export default Header;
