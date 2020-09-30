import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function CartTable() {
  const context = useContext(CartContext);
  const { cart, increase, decrease } = context;
  return (
    <table>
      <tr>
        <th className="item">Items</th>
        <th className="price">Price</th>
        <th className="quantity">Quantity</th>
        <th className="total">Total</th>
      </tr>
      {cart.map((item) => {
        return (
          <>
            <tr>
              <td>{item.name}</td>
              <td style={{ fontWeight: "bold", textAlign: "center" }}>$50</td>
              <td className="item-qnt"> {item.quantity} </td>
              <td className="item-total">${item.price}</td>
            </tr>
          </>
        );
      })}
    </table>
  );
}
{
  /*<div className="cart-container">
      <table>
        <tr>
          <th className="item">Items</th>
          <th className="price">Price</th>
          <th className="quantity">Quantity</th>
          <th className="total">Total</th>
        </tr>
        <tbody>
          <tr>
            <td>Item 1</td>
            <td style={{ fontWeight: "bold", textAlign: "center" }}>$50</td>
            <td className="item-qnt"> 10 </td>
            <td className="item-total">$500</td>
          </tr>
          <tr>
            <td>Item 1</td>
            <td style={{ fontWeight: "bold", textAlign: "center" }}>$50</td>
            <td className="item-qnt"> 10 </td>
            <td className="item-total">$500</td>
          </tr>
          <tr>
            <td>Item 1</td>
            <td style={{ fontWeight: "bold", textAlign: "center" }}>$50</td>
            <td className="item-qnt"> 10 </td>
            <td className="item-total">$500</td>
          </tr>
          <tr>
            <td>Item 1</td>
            <td style={{ fontWeight: "bold", textAlign: "center" }}>$50</td>
            <td className="item-qnt"> 10 </td>
            <td className="item-total">$500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}*/
}

export default CartTable;
