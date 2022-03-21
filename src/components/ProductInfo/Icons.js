import React from 'react'
import {BsBoxSeam} from 'react-icons/bs'
import {FaTruck} from 'react-icons/fa'
import {AiOutlineSafetyCertificate} from 'react-icons/ai'
import {BsDoorClosed} from 'react-icons/bs'
import './Icons.css'
const Icons = () => {
  return (
    <div className='d-flex icons flex-row'>
        <div className='icon'>
                <BsBoxSeam />
                <span>10 days <br />Replacement <br />only</span>
        </div>
        <div className='icon'>
                <FaTruck />
                <span>Amazon Delivered</span>
        </div>
        <div className='icon'>
                <AiOutlineSafetyCertificate />
                <span>2 Years Warranty</span>
        </div>
        <div className='icon'>
                <BsDoorClosed />
                <span>No-Contact <br /> Delivery
                </span>
        </div>
    </div>
  )
}

export default Icons