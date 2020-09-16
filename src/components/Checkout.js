import React from "react";
import "../styles/checkout.css";
import banner from "../assets/images/ad-banner.png";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src={banner} alt="" className="checkout__ad" />

        <div>
            <h2 className="checkout__title">
                Your shopping basket
            </h2>
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
