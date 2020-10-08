import React from "react";
import Button from "../../components/template-components";

function OrderSummary({ subTotal, shipping, vat, checkout }) {
  let grandTotal = subTotal + subTotal * vat + shipping;
  return (
    <div className="order-container">
      <div className="order-box">
        <div className="order-title">
          <h2>Order Summary</h2>
        </div>
        <div className="order-summary">
          <div className="summary">
            <table>
              <tr>
                <td>Subtotal:</td>
                <td className="right-col">${subTotal}</td>
              </tr>
              <tr>
                <td>VAT (10%):</td>
                <td className="right-col">${subTotal * vat}</td>
              </tr>
              <tr>
                <td>Shipping:</td>
                <td className="right-col">${shipping}</td>
              </tr>
              <tr id="space"></tr>
            </table>
          </div>
          <div className="grand-total">
            <table>
              <td>Grand Total:</td>
              <td className="right-col">${grandTotal}</td>
            </table>
          </div>
        </div>
        <div className="checkout-btn">
          <Button onClick={() => checkout()} btnLabel="Check Out" />
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
