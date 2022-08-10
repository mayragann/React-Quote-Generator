import React from 'react'
import "./Header.css"
import logo from "./../Logo/Mass_Effect_logo_PNG1.png"


const Header = () => {
    return (
            <div className='container'>

        <div className='container navbar-main'>
        <img src={logo} alt="about_image" />
        </div>
            </div>
    );
}


export default Header
