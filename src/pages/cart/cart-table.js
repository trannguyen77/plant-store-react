import React from "react";

function CartTable({ cart, increase, decrease }) {
  return (
    <div className="cart-container">
      <table>
        <thead>
          <td className="item">Items</td>
          <td className="price">Price</td>
          <td className="quantity">Quantity</td>
          <td className="total">Total</td>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td className="item-qnt">
                  <button
                    className="item-button"
                    onClick={() => {
                      decrease(item);
                    }}
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    className="item-button"
                    onClick={() => {
                      increase(item);
                    }}
                  >
                    +
                  </button>
                </td>
                <td className="item-total">
                  ${item.price * item.quantity}
                  <button className="item-button">x</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CartTable;
