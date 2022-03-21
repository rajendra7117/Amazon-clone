import React from 'react'
import Modal from '../UI/Modal'
import success from '../../Images/success.png'
import { useHistory } from 'react-router-dom'
import './OrderSuccess.css'
import { useDispatch } from 'react-redux'
import { cartAction } from '../../store/CartSlice'

const OrderSuccess = (props) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const continueShopping = e => {
      props.toggleModal()
      history.push('/')
      dispatch(cartAction.clearCart())
    }
  return (
    <Modal>
        <div className='order-success'>
                <h4>Order Success</h4>
                <img src={success}/>
                <button onClick={continueShopping}>Continue Shopping</button>
        </div>
    </Modal>
  )
}

export default OrderSuccess