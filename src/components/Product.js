import React from "react";
import "../styles/product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  // console.log('product', Array(rating).fill())
  const [{ basket }, dispatch] = useStateValue();

  console.log(Array(rating));
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      {/* 
                text + price
                stars
                image
                button
            */}

      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>&#x00024;</small> {/* dollar sign */}
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟 </p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
