import React, {useState} from "react";
import './PaymentMethod.css'
import { paymentSliceActions } from "../../store/PaymentSlice";
import { useDispatch } from "react-redux";
import AddCard from "./AddCard";
const PaymentMethod = () => {
  const [showCard, setShowCard] = useState(false)
  const dispatch = useDispatch()
  const selectPOD = e =>  {
    dispatch(paymentSliceActions.setMethod({method: 'POD', details: ''}))
    setShowCard(false)
  }
  const selectCard = e =>{
    setShowCard(true)
  }
  return (
    <div className="payment-method">
      <div >
      <input type="radio" id="cod" name="fav_language" value="HTML" onClick={selectPOD} />
      <label for="cod">Pay On Delivery</label>
      </div>
      <br></br>
      <div>
      <input type="radio" id="card" name="fav_language" value="HTML" onClick={selectCard}/>

      <label for="card">Credit or Debit Card</label>
      
      </div>
      <br></br>
      {showCard && <AddCard />}
    </div>
  );
};

export default PaymentMethod;
