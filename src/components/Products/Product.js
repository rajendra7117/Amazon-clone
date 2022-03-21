import React from 'react'
import Price from './Price'
import './Product.css'
import Rating from './Rating'
import {AiFillAmazonSquare} from 'react-icons/ai'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { infoSliceActions } from '../../store/InfoSlice'

const Product = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
    const random = Math.floor(Math.random() * 121)
    
    
    const showInfo = e => {
      dispatch(infoSliceActions.showInfo({data: props.item, related: props.related}))
      history.push(`/product/info/${props.name}`)
    }
   
  return (
    <div className='product-card' onClick={showInfo}>
        <img src={props.img}/>
        <div className='product-info'>
            <span>{props.name}</span>
            <Rating random={random}/>
            <span className='deal'>Deal Of The Day</span>
            <Price price={props.price}/>
            <span className='a-icon'><AiFillAmazonSquare /> Free Delivery</span>
        </div>
    </div>
  )
}

export default Product