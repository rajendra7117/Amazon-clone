import React from 'react'
import './CartItem.css'
import { cartAction } from '../../store/CartSlice'
import { useDispatch } from 'react-redux'
const CartItem = (props) => {
    const subtotal = (+(props.amount) * (props.price.raw)).toString()
    const dispatch = useDispatch()
    
    const removeItem = e => {
        dispatch(cartAction.removeFromCart({id: props.item.id, price: props.item.price.raw}))
    }
  
    const addItem = e => {
        dispatch(cartAction.addToCart({...props.item, amount: 1}))
    }
  return (
    <div className='cart-item'>
        <div className='cart-img'>
            <img src={props.img} />
        </div>
        <div className='cart-info'>
            <span className='span-1'>#1 Best Seller</span>
            <h5>{props.name}</h5>
            <span>Price: {props.price.formatted_with_symbol}</span>
            <span>Quantity: {props.amount}</span>
            <div className='sub-total'>
            <span className='sub-total'>Subtotal {props.amount} items: <span className='sub'>{subtotal}</span></span>
        </div>
        <div className='cart-btns'><button onClick={removeItem}>-</button> <button  onClick={addItem}>+</button></div>
        </div>
        
    </div>
  )
}

export default CartItem