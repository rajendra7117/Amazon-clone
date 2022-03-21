import React from 'react'
import CartItem from '../Cart/CartItem'
import './Summary.css'
const Summary = (props) => {
    const content = props.items.map(item => <CartItem name={item.name} price={item.price} img={item.image.url} amount={item.amount} item={item} key={Math.random() * 1000} id={item.id} />)
  return (
    <div className='summary'>
        {content}
    </div>
  )
}

export default Summary