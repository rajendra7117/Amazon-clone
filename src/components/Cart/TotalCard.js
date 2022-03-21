import React from 'react'
import { useSelector } from 'react-redux'
import './TotalCard.css'
import { useHistory } from 'react-router-dom'
const TotalCard = () => {
    const total = useSelector(state => state.cart.totalAmount)
    const history = useHistory()
    const goToPayment = e => {
          history.push('/payment')
    } 
  return (
    <div className='total-card'>
        <div className='d-flex flex-row'>
       <h4>Total Amount</h4>
       <h1>{total}</h1>
       </div>
       <button onClick={goToPayment}>Proceed To Buy</button>
        <span className='mt-3'>EMI Available</span>
     </div>
  )
}

export default TotalCard