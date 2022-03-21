import Modal from '../UI/Modal'
import React from 'react'
import './Success.css'

import {useHistory} from 'react-router-dom'
import { Link } from 'react-router-dom'
const Success = (props) => {
    const history = useHistory()
    const goToSignIn = e => {
        props.toggleModal()
        

    }
  return (
      <Modal>
    <div className='success'>
        <h4>{props.message}</h4>
        <span>{props.message2}</span>
        <Link to={props.route} onClick={goToSignIn}>{props.button}</Link>
    </div>
    </Modal>
  )
}

export default Success