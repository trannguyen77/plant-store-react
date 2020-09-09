import React from "react";
import "./shopping-cart.css";
import CartTable from './cart-table';

function ShoppingCart() {
  return (
    <div className="container">
      <h1 className="page-title">Shopping Cart</h1>
      <div className="cart-container">
        <CartTable/>
      </div>
      <div className="order-container">
        <div className="order-box"></div>
      </div>
    </div>
  );
}

export default ShoppingCart;
