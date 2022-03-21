import React from 'react'
import Container from '../Layout/Container'
import { useSelector } from 'react-redux'
import ProductsGrid from '../Products/ProductsGrid'
import Loader from '../UI/Loader'

const SearchResults = () => {
    const results = useSelector(state => state.searchResults.results)
    console.log(results)

  return (
    <Container>

      {results.length>0 ? <ProductsGrid products={{data: results}} cat={{id: 'search'}} /> : <Loader />}  
    </Container>
  )
}

export default SearchResults