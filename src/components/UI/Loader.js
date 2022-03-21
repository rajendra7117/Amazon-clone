import React from 'react'
import './Loader.css'
import { Oval, TailSpin } from 'react-loader-spinner'
const Loader = () => {
  return (
    <div className='container loader'>
        <TailSpin
    height="100"
    width="100"
    color='#FFB72B'
    ariaLabel='loading'
  />
    </div>
  )
}

export default Loader