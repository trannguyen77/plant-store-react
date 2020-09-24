import React, { useState } from "react";
import "./theme-components.css";

export default function CartQuantity() {
  const [cartQnt, setCartQnt] = useState(1);
  const handleInputChange = (event) => {
    setCartQnt(event.target.value);
    console.log(cartQnt);
  };
  const handleSubmit = () => {
    console.log('44');
  };
  return (
    <div className="cart-quantity">
        <input
        type="number"
        id="number"
        name="number"
        value={cartQnt}
        min="1"
        step="1"
        onChange={handleInputChange}
      ></input>
      <button onClick={handleSubmit}>Add to cart</button>
    </div>
  );
}
