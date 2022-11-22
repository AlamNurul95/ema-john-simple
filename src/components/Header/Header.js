import React from 'react';
import './Header.css'
import logo1 from './images/logo.png'


const Header = () => {
    return (
        <div className="header">
            <img className='logo' src={logo1} alt="" srcset="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/order-revew">Order Revew</a>
            </nav>


        </div>
    );
};

export default Header;