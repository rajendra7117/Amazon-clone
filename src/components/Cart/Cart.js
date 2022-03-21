import React from 'react'
import { useSelector } from 'react-redux'
import Container from '../Layout/Container'
import CartContainer from './CartContainer'
import NoItems from './NoItems'
import TotalCard from './TotalCard'
import cart from '../../Images/cart.png'
import './Cart.css'

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    
  return (
    <Container >
        <div className='cart container'>
        
                
                {cartItems.length>0 ? <CartContainer items={cartItems}/> : <NoItems message={'Your Cart is Empty'}img={cart}/>}
                {cartItems.length>0 && <TotalCard />}
                </div>
    </Container>
  )
}

export default Cart