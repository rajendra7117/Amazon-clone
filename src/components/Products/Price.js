import React from "react";
import './Price.css'
import {BiRupee} from 'react-icons/bi'

const Price = (props) => {

 const Pprice = props.price.raw + Math.floor(Math.random() * 15000)
  return <div className="priceDiv">
      <span className="Cprice">{props.price.formatted_with_symbol}</span>
      <span className="Pprice"><del><BiRupee />{Pprice}</del></span>
    
  </div>;
};

export default Price;
