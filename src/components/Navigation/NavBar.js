import React, {useEffect, useState} from 'react'
import './NavBar.css'
import { navArray} from '../../Data/data'
import {IoMdArrowDropdownCircle} from 'react-icons/io'
import {IoMdArrowDropupCircle} from 'react-icons/io'

import Link from './Link'

import { useSelector } from 'react-redux'
import {BsSuitHeartFill} from 'react-icons/bs'
import { useHistory } from 'react-router-dom'
const NavBar = () => {
  const [heartClass, setHeartClass] = useState(false)
  const wlist = useSelector(state => state.wishList.wList)
  const authStatus = useSelector(state => state.auth.isLoggedIn)
  const [showMenu, setShowMenu] = useState(false)
 const history = useHistory()
  useEffect(() => {
   setHeartClass(true)
  
   setTimeout(() => {
     setHeartClass(false)
   }, 2000)
  },[wlist])
const goToWishList = e => {
  setShowMenu(prev => !prev)
 if(authStatus) {
  history.push('/wishlist')
 }
 else{
  history.push('/sign-in')
 }
}
const toggleMenu = e => {
  setShowMenu(prev => !prev)
  
}
  const items =  navArray.map(item => <Link to={item.route} key={item.id} id={item.id} name={item.name} toggleMenu={toggleMenu}/>)
  return (
    <div className='nav-bar'>
          <div onClick={toggleMenu} className='nav-menu'><span> Categories {showMenu ? <IoMdArrowDropdownCircle /> : <IoMdArrowDropupCircle />} </span></div>
        <ul className={`${showMenu ? 'active' : ''}`}>
        
            {items}
            <div className='wishlist' onClick={goToWishList}><span> <span
      
      ><BsSuitHeartFill className={`${heartClass ? 'bump' : ''}`} /> </span><span>Your Wish List</span></span></div>
        </ul>
       
        
    </div>
  )
}

export default NavBar