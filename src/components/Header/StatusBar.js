import React from 'react'
import './StatusBar.css'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
const StatusBar = () => {
  const authStatus = useSelector(state => state.auth.isLoggedIn)
  const userDetails = useSelector(state => state.auth.userDetails)
  
  const history = useHistory()
    const signIn = e => {
      if(authStatus){
        return
      }
      else{
        history.push('/sign-in')
      }
    }
 
  return (
    <div className='d-flex flex-column ml-1  status' onClick={signIn}>
        <span>Hello, {authStatus ? 'signed in as' : 'sign-in'}</span>
        {Object.keys(userDetails).length>0 && <span>{userDetails.data.email}</span>}
        
       
        
    </div>
  )
}

export default StatusBar