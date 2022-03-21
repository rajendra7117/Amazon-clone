import React from 'react'
import './WishList.css'
import ListItem from './ListItem'
import './WishListContainer.css'
const WishListContainer = (props) => {
 
    const content = props.list.map(item => <ListItem name={item.name} key={item.id} price={item.price.formatted_with_symbol} img={item.image.url} item={item}/>)
  
  return (
    <div className='wlist'>
       {content}
    </div>
  )
}

export default WishListContainer