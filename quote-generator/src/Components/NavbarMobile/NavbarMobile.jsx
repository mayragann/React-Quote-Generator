import React, { useState } from 'react';
import Switch from "react-switch";
import "./NavbarMobile.css"
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "./../Logo/Mass_Effect_logo_PNG1.png"
import renegade from "../../bioPictures/Paragon-RenegadeBaseFile-01.svg"
import paragon from "../../bioPictures/Paragon-RenegadeBaseFile-02.svg"

const NavbarMobile = ({theme,handleChangeTheme}) => {
    const [open, setOpen] = useState(false);
    const handleNavbarOpen = () =>{
        setOpen(!open)
    }
  return (
    <div className='responsive-mobile-view'>
     <div className="container-fluid mobile-view-header ">
        <p>
          <GiHamburgerMenu size={25} onClick={handleNavbarOpen}/>
     <img src={logo}
                    alt="about_image"/>
        </p>
      </div>
      {open ? (
        <div className='mobile-nav'>
                   
                   <div className="mobile-theme-change"
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
      ) : null}
    </div>
  );
};

export default NavbarMobile;