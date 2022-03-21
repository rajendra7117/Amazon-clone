import React, {useRef, useState} from "react";
import './AddCard.css'
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { paymentSliceActions } from "../../store/PaymentSlice";
const AddCard = () => {
    const numberRef = useRef()
    const nameRef = useRef()
    const [error, setError] = useState(false)
    const dispatch = useDispatch()
    const submitCard = e => {
        e.preventDefault()
        const cardNumber = numberRef.current.value
        const name = nameRef.current.value
        if(cardNumber.length<=14 || name.trim()==='')
        {
            setError(true)
            return
        }
        setError(false)
        dispatch(paymentSliceActions.setMethod({method: 'card', details: {cardNumber: cardNumber, name: name}}))
    }
  return (
    <div className="card">
      <h5>Add your card</h5>
      <form onSubmit={submitCard}>
      <div>
        <label>Card Number</label>
        <input type="number" ref={numberRef} />
      </div>
      <div>
        <label>Name on Card</label>
        <input type="text"ref={nameRef} />
      </div>
      {error && <Alert variant="danger"> Invalid Card Details </Alert>}
      <button>Submit</button>
      </form>
    </div>
  );
};

export default AddCard;
