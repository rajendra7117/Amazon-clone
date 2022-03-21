import React from 'react'
import {IoMdStar, IoMdStarHalf, IoMdStarOutline} from 'react-icons/io'
import './Rating.css'


const Rating = (props) => {
  return (
    <div className='rating'>
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        {props.random%2==0 ? <IoMdStarHalf /> : <IoMdStarOutline />}
    </div>
  )
}

export default Rating