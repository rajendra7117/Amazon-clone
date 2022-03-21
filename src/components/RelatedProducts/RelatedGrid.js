import React from 'react'
import Product from '../Products/Product'
import './RelatedGrid.css'
const RelatedGrid = (props) => {
  
   const content = props.products.map(item =>  <Product id={item.id} name={item.name} img={item.image.url} key={item.id} price={item.price} item={item} related={props.related} />)
  return (
    <div className='relatedGrid'>
        {content}
    </div>
  )
}

export default RelatedGrid