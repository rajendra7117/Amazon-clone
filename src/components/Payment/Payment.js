import React, {useEffect} from 'react'
import './Payment.css'
import { useSelector } from 'react-redux'
import Container from '../Layout/Container'
import AddressSelection from './AddressSelection'
import { Accordion } from 'react-bootstrap'
import PaymentMethod from './PaymentMethod'
import Summary from './Summary'
import Order from './Order'
import { useHistory } from 'react-router-dom'



const Payment = () => {
  const history = useHistory()
 const items = useSelector(state => state.cart.cartItems)
 const total = useSelector(state => state.cart.totalAmount)
  useEffect(() => {
      if(total===0){
        history.push('/')
      }
  }, [total])

  return (
    <Container>  <h2>Checkout</h2>
     
        <div className='payment'>
         
          <div>
        <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Enter your Delivery Address</Accordion.Header>
    <Accordion.Body>
    <AddressSelection />
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Payment method</Accordion.Header>
    <Accordion.Body>
    <PaymentMethod />
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Order Summary</Accordion.Header>
    <Accordion.Body>
    <Summary items={items}/>
    </Accordion.Body>
  </Accordion.Item>
  </Accordion>
  </div>
  <div>
    <Order />
  </div>
           
            </div>
    </Container>
  )
}

export default Payment