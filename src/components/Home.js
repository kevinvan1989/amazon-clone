import React from "react";
import "../styles/home.css";
import Product from "./Product";
import hero from '../assets/images/hero-amazon.png'

function Home() {
  return (
    <div className="home">
      
      <div className="home__container">
        <img
          // src="https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-01-Hero-D-5ff78a97-f4d3-4242-9344-c1f478aff592._CB428091778_QL85_V1_.jpg"
          src={hero}
          alt="hero Amazon Prime"
          className="home__image"
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup"
            price="29.99"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5} // Rating staat { } omdat dit als number wordt meegegeven ...
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for baking Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla beatae cum et omnis commodi hic.
            "
            price="239.99"
            image="https://i.pinimg.com/474x/fd/15/72/fd157238be7eee96ad8998f92a48f221.jpg"
            rating={4} // Rating staat { } omdat dit als number wordt meegegeven ...
          />
        </div>
        <div className="home__row">
        <Product
            id="4903850"
            title="Samsung Curved LED Watch 49' dolor sit amet, consectetur adipisicing elit. Nulla beatae cum et omnis commodi hic.
            "
            price="199.99"
            image="https://i5.walmartimages.com/asr/8fa1465e-fd64-47fd-9b9e-08da9ba3882d.3a0a6ecbfffd4c44c1f74acf09a98c6a.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff"
            rating={3} // Rating staat { } omdat dit als number wordt meegegeven ...
          />
           <Product
            id="23445930"
            title="Amazon Echo | Smart Speaker Alexa. ipsum dolor sit amet, consectetur adipisicing elit. Nulla beatae cum et omnis commodi hic.
            "
            price="98.99"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzRB3heLoAIKiCYF7gA7IjXz9eQfQvYOlQ2ebJwwPDg6q13mxQls_pClklHH8pDCthfl1wRFdR&usqp=CAc"
            rating={5} // Rating staat { } omdat dit als number wordt meegegeven ...
          />
           <Product
            id="3254354345"
            title="Apple iPad Pro (12.9 inch, Wi-Fi, 128GB) - Silver
            "
            price="589.99"
            image="https://images-na.ssl-images-amazon.com/images/I/514bS4zwEwL._AC_SY679_.jpg"
            rating={4} // Rating staat { } omdat dit als number wordt meegegeven ...
          />
        </div>
        <div className="home__row">
          <Product
            id="2254764345"
            title="Samsung Curved LED Monitor 54'
            "
            price="789.99"
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX425_.jpg"
            rating={4} // Rating staat { } omdat dit als number wordt meegegeven ...
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
