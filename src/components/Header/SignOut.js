import React from 'react'
import './SignOut.css'
import { useDispatch } from 'react-redux'
import { authSliceActions } from '../../store/AuthSlice'
import { cartAction } from '../../store/CartSlice'
import { wishlistSliceActions } from '../../store/WishListSlice'
import { paymentSliceActions } from '../../store/PaymentSlice'
import { useHistory } from 'react-router-dom'

const Return = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const signout = e => {
     dispatch(authSliceActions.signOut())
     dispatch(cartAction.clearCart())
     dispatch(wishlistSliceActions.clearList())
     dispatch(paymentSliceActions.clearPaymentDetails())
     history.push('/')
     props.toggleMenu()
  }
  return (
    <div className='signout'>
            <button onClick={signout}>Sign out</button>
    </div>
  )
}

export default Return