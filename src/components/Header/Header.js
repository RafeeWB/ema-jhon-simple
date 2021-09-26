import React from 'react';
import logo from "../../images/logo.png"
import "./Header.css"

const Header = () => {
    return (
        <div className="Header">
            <img src={logo} alt="" />
 
            <div className="navigation">
                <nav>
                    <a href="/shop">Shop</a>
                    <a href="/review">Review</a>
                    <a href="/manage">Manage Inventory Here</a>
                </nav>
             </div>
        </div>
    );
};

export default Header;