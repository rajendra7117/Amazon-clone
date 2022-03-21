import React from 'react'

import Container from '../Layout/Container'
import './NoItems.css'
const NoItems = (props) => {
  return (
    <Container>
        <div className='no-items'>
        <h4>{props.message}</h4>
        <img src={props.img}/>
        </div>
    </Container>
  )
}

export default NoItems