import React from "react";
import "./shopping-cart.css";
import CartTable from "./cart-table";
import OrderSummary from "./order-summary";

function ShoppingCart() {
  return (
    <div className="page-container">
      <h1 className="page-title">Shopping Cart</h1>
      <div className="shopping-container">
        <CartTable/>
        <OrderSummary/>
      </div>
    </div>
  );
}

export default ShoppingCart;
