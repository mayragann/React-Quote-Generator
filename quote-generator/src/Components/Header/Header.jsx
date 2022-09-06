import React from 'react'
import "./Header.css"
import logo from "./../Logo/Mass_Effect_logo_PNG1.png"
import renegade from "../../bioPictures/Paragon-RenegadeBaseFile-01.svg"
import paragon from "../../bioPictures/Paragon-RenegadeBaseFile-02.svg"


const Header = ({theme, handleChangeTheme}) => {
    return (
        <>
            <div className='navbar-main'>
                <img src={logo}
                    alt="about_image"/>

                <div className="theme-change"
                    onClick={
                        () => handleChangeTheme()
                }>
                    {
                    theme === 'paragon' ? (
                        <p>
                            <img src={renegade}
                                alt="renegade icon"/>
                        </p>
                    ) : (
                        <p >
                            <img src={paragon}
                                alt="paragon icon"/>
                        </p>
                    )
                } </div>

            </div>

        </>
    );
}


export default Header
