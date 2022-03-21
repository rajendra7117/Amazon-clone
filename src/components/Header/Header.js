import React, { Fragment, useState } from "react";

import "./Header.css";
import logo from "../../Images/logo3.png";

import Search from "./Search";
import {GiHamburgerMenu} from 'react-icons/gi'
import StatusBar from "./StatusBar";
import SignOut from './SignOut'
import HeaderCart from "./HeaderCart";
import { useSelector } from "react-redux";
const Header = () => {
  const authState = useSelector(state => state.auth.isLoggedIn)
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = e => {
      setShowMenu(prev => !prev)
  }
  return (
    <div>
      <div className="headerContainer">
        <div className="headerDiv1">
          <img src={logo} className="header-logo" />
         
          <Fragment>
              <Search />
          </Fragment>
          
          
          <GiHamburgerMenu className="menu" onClick={toggleMenu}/>
          <div className={`responsiveDiv ${showMenu ? 'active' : ''}`}>
          <Fragment>
              <StatusBar />
          </Fragment>
          <Fragment>
            {authState && <SignOut toggleMenu={toggleMenu}/>}
              
          </Fragment>
          <Fragment>
              <HeaderCart toggleMenu={toggleMenu} />
          </Fragment>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
