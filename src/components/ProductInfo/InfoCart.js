import React, { useState } from "react";
import { ImLocation2 } from "react-icons/im";
import { AiTwotoneLock } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/CartSlice";
import { useSelector } from "react-redux";
import { wishlistSliceActions } from "../../store/WishListSlice";
import { toast, ToastContainer } from "react-toastify";
import { useHistory } from "react-router-dom";

import "./InfoCart.css";
const InfoCart = (props) => {
  const dispatch = useDispatch();
  const wlist = useSelector((state) => state.wishList.wList);
  const authState = useSelector((state) => state.auth.isLoggedIn);

  const history = useHistory();

  const cartData = { ...props.item, amount: 1 };
 

  const addToCart = (e) => {
    if (authState) {
      dispatch(cartAction.addToCart(cartData));
    } else {
      history.push("/sign-in");
    }
  };

  const addToWishList = (e) => {
    let onList = false;
    if (wlist.length > 0) {
      if (authState) {
        wlist.forEach((element) => {
          if (element.id === props.item.id) {
            onList = true;
          }
        });
      } else {
        history.push("/sign-in");
      }
    }
    if (onList) {
    
      toast.info("Item is already in your wish list", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    dispatch(wishlistSliceActions.addToWishList(props.item));
  };

  const buyNow  = e => {
    if(authState){
      dispatch(cartAction.addToCart(cartData))
      history.push('/payment')
    }
    else{
      history.push('/sign-in')
    }
  }
  return (
    <div className="info-cart">
      <h3>{props.price}</h3>
      <span>Free Delivery, by next week</span>
      <span>
        <ImLocation2 /> Select Your Location
      </span>
      <h5>In Stock</h5>
      <span>
        Sold By Amazon sellers and <br /> Delivered By Amazon
      </span>

      <button className="cart-btn" onClick={addToCart}>
        Add To Cart
      </button>
      <button className="buy-btn" onClick={buyNow}>Buy Now</button>
      <span className="secure">
        <AiTwotoneLock /> Secure Transaction
      </span>
      <button className="wish-btn" onClick={addToWishList}>
        Add To Wish List
      </button>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
};

export default InfoCart;
