import React, { Fragment } from 'react'
import Price from '../Products/Price'
import Rating from '../Products/Rating'
import {BiRupee} from 'react-icons/bi'
import './InfoGrid.css'
import Icons from './Icons'
import InfoCart from './InfoCart'
const InfoGrid = (props) => {
  const random = Math.floor(Math.random() * 121)
  return (
    <div className='infogrid'>
        <div className='info-img'>
          <img src={props.data.image.url}/>

        </div>
        <div className='detail'>
          <h2>{props.data.name}</h2>
          <Rating random={random}/>
          <Price price={props.data.price}/>
          <span>EMI Starts at <BiRupee />200</span>
          <Icons />
        </div>
        <Fragment>
          <InfoCart price={props.data.price.formatted_with_symbol} item={props.data}/>
        </Fragment>
    </div>
  )
}

export default InfoGrid