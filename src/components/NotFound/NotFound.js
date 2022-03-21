import React from 'react'
import Container from '../Layout/Container'
import error from '../../Images/error.png'
import './NotFound.css'
const NotFound = () => {
  return (
    <Container>
        <div className='not-found'>
            <h5>Page Not found, please check URL..</h5>
            <img src={error}/>
        </div>
    </Container>
  )
}

export default NotFound