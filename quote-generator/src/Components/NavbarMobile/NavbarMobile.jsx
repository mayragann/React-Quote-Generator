import React, { useState } from 'react';
import Switch from "react-switch";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMobile = ({theme,handleChangeTheme}) => {
    const [open, setOpen] = useState(false);
    const handleNavbarOpen = () =>{
        setOpen(!open)
    }
  return (
    <div className='reponsive-mobile-view'>
     <div className="container-fluid mobile-view-header">
        <p>
          <GiHamburgerMenu size={25} onClick={handleNavbarOpen}/>
        </p>
      </div>
    </div>
  )
}

export default NavbarMobile;