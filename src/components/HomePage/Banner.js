import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Banner.css'
import Banner1 from '../../Images/Banner1.jpg'
import Banner2 from '../../Images/Banner2.jpg'
import Banner3 from '../../Images/Banner3.jpg'
import Banner4 from '../../Images/Banner4.jpg'
import Banner5 from '../../Images/Banner5.jpg'
import Banner6 from '../../Images/Banner6.jpg'
const Banner = () => {
  return (
    <Carousel className='w-100'>
  <Carousel.Item className='w-100'>
    <img
      className="d-block w-100"
      src={Banner1}
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Banner2}
      alt="Second slide"
    />

  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Banner3}
      alt="Third slide"
    />

  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Banner4}
      alt="Third slide"
    />

  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Banner5}
      alt="Third slide"
    />

  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Banner6}
      alt="Third slide"
    />

  
  </Carousel.Item>
</Carousel>
  )
}

export default Banner