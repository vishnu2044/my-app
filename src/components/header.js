import React from "react";

import "./header.css";


function Header() {
    return (
        <div>
            <div className='app-header'>
                <span className='header-title'>header - ReactJS</span>
            </div>
            <div className='header-menu'>
                <span className='header-menu-title'>Home</span>
                <span className='header-menu-title'>Settings</span>
                <span className='header-menu-title'>Contact</span>
                <span className='header-menu-title'>Logout</span>
            </div>
        </div>
    );
}

export default Header;