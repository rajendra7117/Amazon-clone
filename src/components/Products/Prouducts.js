import React, { useEffect, useState } from "react";
import {commerce} from '../../lib/commerce'
import Loader from "../UI/Loader";
import Container from "../Layout/Container";
import './Products.css'
import ProductsGrid from "./ProductsGrid";
import { useSelector } from "react-redux";

const Products = () => {
    const [data, setData] = useState({})
    const selectedCategory = useSelector(state => state.selectedCat)
  
    const fetchProducts = async () => {
        const response = await commerce.products.list()
        setData(response)
         
    }
 
    useEffect(() => {
        fetchProducts()
    },[])
  return <Container >
      <div className="products">
      {Object.keys(data).length>0 ? <ProductsGrid products={data} cat={selectedCategory.cat}/> : <Loader />}
      </div>
       
  </Container>;
};

export default Products;
