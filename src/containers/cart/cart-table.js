import React from "react";

function CartTable() {
  return (
    <div className="cart-container">
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
}

export default CartTable;
