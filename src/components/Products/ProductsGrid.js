import React from 'react'
import './ProductsGrid.css'
import Product from './Product'
const ProductsGrid = (props) => {
let contentToMap ;

   if(props.cat.id==='all' || props.cat.id==='search'){
  
    contentToMap = props.products.data

   }
   else{
    contentToMap =props.products.data.filter(item => (item.categories[0].id===props.cat.id))
   }
 
   
 const    content =contentToMap.map(item => <Product id={item.id} name={item.name} img={item.image.url} key={item.id} price={item.price} item={item} related={item.related_products}/>)
  return (
    <div className='productsgrid'>
      
       {content}
    </div>
  )
}

export default ProductsGrid