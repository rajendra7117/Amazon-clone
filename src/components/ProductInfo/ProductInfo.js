import React from 'react'
import Container from '../Layout/Container'
import { useSelector} from 'react-redux'
import Loader from '../UI/Loader'
import InfoGrid from './InfoGrid'
import RelatedProducts from '../RelatedProducts/RelatedProducts'
const ProductInfo = () => {
  
    const data = useSelector(state => state.info.product)
  
  return (

    <Container >
         {data.data ? <InfoGrid data={data.data} /> : <Loader />} 
        {data.related.length>0? <RelatedProducts products={data.related} related={data.related} /> : 'No Related Products'} 
        
    </Container>
  )
}

export default ProductInfo