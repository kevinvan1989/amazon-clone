import React from "react";
import "../styles/header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";


function Header() {
  // useStateValue return an Array and we need the object ...
  const [{basket}] = useStateValue()
  
  return (
    <div className="header">
      <Link to="/">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon logo"
      />
      </Link>
      <div className="header__search">
        <input type="text" className="header__search--input" />
        <SearchIcon className="header__search--icon"/>
        {/* logo header__search--input */}
      </div>
{/* // ------- END header__search */}
      
      <div className="header__nav">
        <div className="header__option">
          <span className="header__option--lineOne">Hello guest</span>
          <span className="header__option--lineTwo">Sign In</span>
        </div>
        <div className="header__option">  
          <span className="header__option--lineOne">Returns</span>
          <span className="header__option--lineTwo">&amp; Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option--lineOne">Your</span>
          <span className="header__option--lineTwo">Prime</span>
        </div>
      </div>

      <Link to="/checkout">
      <div className="header__option header__option--basket">
          <ShoppingBasketIcon  />
  <span className="header__option--lineTwo header__basketCount">{basket?.length}</span>
      </div>
      </Link>
      {/* // ------- END header__nav */}
    </div>
  );
}

export default Header;
