import React from 'react'
import CartItem from './CartItem'
import './CartContainer.css'
const CartContainer = (props) => {
     const content = props.items.map(item => <CartItem name={item.name} price={item.price} img={item.image.url} amount={item.amount} item={item} key={Math.random() * 1000} id={item.id}/>)
  return (
    <div className='cart-container'>
     {content}
    </div>
  )
}

export default CartContainer