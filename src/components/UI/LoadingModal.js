import React from 'react'
import './Loader.css'
import {  TailSpin } from 'react-loader-spinner'
import Modal from './Modal'
const LoadingModal = () => {
  return (
      <Modal>
    <div className='container loader'>
        <TailSpin
    height="100"
    width="100"
    color='#FFB72B'
    ariaLabel='loading'
  />
    </div>
    </Modal>
  
  )
}

export default LoadingModal