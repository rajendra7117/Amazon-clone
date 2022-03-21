import React from 'react'
import './RelatedProducts.css'
import RelatedGrid from './RelatedGrid'
const RelatedProducts = (props) => {
    
  return (
    <div className='relatedProducts'>
        <h1>Related Products</h1>
        <RelatedGrid products={props.products} related={props.related}/>
    </div>
  )
}

export default RelatedProducts