import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

import './navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='kivlic__navbar'>
      <div className='kivlic__navbar-logo'>
        <img src={logo} alt="logo" />
      </div> 
      <div className='kivlic__navbar-links'>
      <p>About Us</p>
      <p>Services</p>
      <p>Pricing</p>
      <p>Contact</p>
      </div>
      <div className='kivlic__navbar-login'>
        <p>Login</p>
        <p>SignUp</p>
      </div>

      <div className='kivlic__navbar-menu'>
          { toggleMenu
            ? <RiCloseLine cursor='pointer' color='#fff' size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line cursor='pointer' color='#fff' size={27} onClick={() => setToggleMenu(true)} />
          }
          { toggleMenu && (
            <div className='kivlic__navbar-menu_container scale-up-center'>
              <div className='kivlic__navbar-menu_container-links'>
                <p>About Us</p>
                <p>Services</p>
                <p>Pricing</p>
                <p>Contact</p>
              </div>
              <div className='kivlic__navbar-menu_container-login'>
                <p>Login</p>
                <p>SignUp</p>
              </div>
            </div>
          )
          }
        </div> 
    </div>
  )
}

export default Navbar