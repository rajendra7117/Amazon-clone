import React, {useRef, useState} from 'react'
import { Alert } from 'react-bootstrap'
import './AddressSelection.css'
import { useDispatch } from 'react-redux'
import { paymentSliceActions } from '../../store/PaymentSlice'
const AddressSelection = (props) => {
  const addres1Ref = useRef()
  const addres2Ref = useRef()
 const cityRef = useRef()
 const [error, setError] = useState('')
 const dispatch = useDispatch()
 const submitHandler = e => {
   e.preventDefault()
   const address1 = addres1Ref.current.value
   const address2 = addres2Ref.current.value
   const city = cityRef.current.value
   if(address1.trim()==='' || address2.trim()==='' || city.trim()===''){
      setError('All fields must be filled')
      return
   }
   dispatch(paymentSliceActions.setAddress({address: `${address1}, ${address2}, ${city}`}))
 }
  return (
    <div className='address'>
      
        <form className='form address-form' onSubmit={submitHandler}>
        <h5>Enter your Delivery address</h5>
        <label>Address line 1</label>
        <input type="text" placeholder='stree1' ref={addres1Ref}/>
        <label>Address Line 2</label>
        <input type="text" placeholder='street2' ref={addres2Ref}></input>
        <label>City</label>
        <input type="text" placeholder='your city' ref={cityRef}/> 
        {error && <Alert variant='danger' className='mt-2'>{error}</Alert>}
        <button>Save Address</button>
        </form>
    </div>
  )
}

export default AddressSelection