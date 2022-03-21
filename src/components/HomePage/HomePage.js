import React from 'react'
import Banner from './Banner'
import './HomePage.css'
import Categories from '../Categories/Categories'
const HomePage = () => {
  return (
    <div className='homepage'>
        <Banner />
        <Categories />
    </div>
  )
}

export default HomePage