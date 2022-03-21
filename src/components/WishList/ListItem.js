import React from "react";
import Rating from "../Products/Rating";
import "./ListItem.css";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/CartSlice";
import { wishlistSliceActions } from "../../store/WishListSlice";
const ListItem = (props) => {

  const random = Math.floor(Math.random() * 20);
  const dispatch = useDispatch()
  const addToCart = e => {
    dispatch(cartAction.addToCart({...props.item, amount: 1}))
  }
  const removeFromList = e => {
    dispatch(wishlistSliceActions.removeFromWishList({id: props.item.id}))
  }
  return (
    <div className="list-item">
      <div className="w-section1">
        <div className="list-img">
          <img src={props.img} />
        </div>
        <div className="w-info">
          <h4>{props.name}</h4>
          <Rating random={random} />
          <span>Price: {props.price}</span>
        </div>
      </div>
      <div className="w-section2">
        <button onClick={addToCart}>Add to Cart</button>
        <button className="delete" onClick={removeFromList}>Delete</button>
      </div>
    </div>
  );
};

export default ListItem;
