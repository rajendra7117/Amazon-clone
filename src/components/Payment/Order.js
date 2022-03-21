import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import './Order.css'
import OrderSuccess from './OrderSuccess'
import LoadingModal from '../UI/LoadingModal'
import { Alert } from 'react-bootstrap'
const Order = () => {
    const address = useSelector(state => state.payment.address)
    const paymentDetails = useSelector(state => state.payment.method)
    const total = useSelector(state => state.cart.totalAmount)
    const [showModal, setShowModal] = useState(false)
    const [showLoader, setShowLoader] = useState(false)
    const [error,setError] = useState(false)

     const placeOrder = e => {
       if(Object.keys(address).length===0 || Object.keys(paymentDetails).length===0){
          setError(true)
          return
       }
        setShowLoader(true)
        setTimeout(() => {
          setShowLoader(false)
          setShowModal(true)
        }, 2000)
     }
     const toggleModal = e => {
       setShowModal(false)
     }
  return (
    <div className='order'>
        <div>
        <h5>Delivery address:</h5>
        <h6>{address.address}</h6>
        </div>
        <h6>payment type: {paymentDetails.method}</h6>
        <span>Total Amount: {total}</span>
        {error && <Alert variant='danger'>Please select address and payment methods</Alert>}
          
        <button onClick={placeOrder}>Place Order</button>
        {showLoader && <LoadingModal />}
        {showModal && <OrderSuccess toggleModal={toggleModal}/>}

    </div>
  )
}

export default Order