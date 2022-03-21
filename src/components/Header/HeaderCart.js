import React from 'react'
import {GiShoppingCart} from 'react-icons/gi'
import './HeaderCart.css'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const HeaderCart = (props) => {
  const cartItems = useSelector(state => state.cart.cartItems)
  const authStatus = useSelector(state => state.auth.isLoggedIn)
  const history = useHistory()
  const goToCart = e => {
    if(authStatus){
      props.toggleMenu()
      history.push('/cart')
    }
    else{
      history.push('/sign-in')
    }
        
  }
  return (
    <div className='header-cart' onClick={goToCart}>
      <div>
        <GiShoppingCart /> <span>Cart</span>{cartItems.length>0 && <span className='count'>{cartItems.length}</span>}
        </div>
    </div>
  )
}

export default HeaderCart