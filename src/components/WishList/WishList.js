import React from 'react'
import { useSelector } from 'react-redux'
import NoItems from '../Cart/NoItems'
import WishListContainer from './WishListContainer'
import cry from '../../Images/cry.png'
import Container from '../Layout/Container'
import './WishList.css'
const WishList = () => {
    const list = useSelector(state => state.wishList.wList)
    

  return (
    <Container>
         {list.length>0 ? <WishListContainer list={list} /> : <NoItems message={'Your wishlist is empty'} img={cry}/>}
    </Container>
  )
}

export default WishList