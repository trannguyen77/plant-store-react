import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./shopping-cart.css";
import CartTable from "./cart-table";
import OrderSummary from "./order-summary";

function ShoppingCart() {
  const context = useContext(CartContext);
  let {
    cart,
    subTotal,
    vat,
    shipping,
    increase,
    decrease,
    removeCart,
    checkout,
  } = context;

  return (
    <div className="page-container">
      <h1 className="page-title">Shopping Cart</h1>
      <div className="shopping-container">
        <CartTable
          cart={cart}
          increase={increase}
          decrease={decrease}
          removeCart={removeCart}
        />
        <OrderSummary
          vat={vat}
          shipping={shipping}
          subTotal={subTotal}
          checkout={checkout}
        />
      </div>
    </div>
  );
}

export default ShoppingCart;
