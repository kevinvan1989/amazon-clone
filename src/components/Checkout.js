import React from "react";
import "../styles/checkout.css";
import banner from "../assets/images/ad-banner.png";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src={banner} alt="" className="checkout__ad" />

        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
          {basket.map((item) => (
            <CheckoutProduct 
            id = {item.id}
            title = {item.title}
            image= {item.image}
            price = {item.price}
            rating = {item.rating} />
          ))}

          {/* <CheckoutProduct
            id='1233'
            title='lorem ipsum'
            image='https://via.placeholder.com/300'
            price={125}
            rating={4}
          /> */}

          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
