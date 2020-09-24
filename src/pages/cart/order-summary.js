import React from "react";
import Button from "../../components/theme-components/button";

function OrderSummary() {
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
                <td className="right-col">$500</td>
              </tr>
              <tr>
                <td>VAT (10%):</td>
                <td className="right-col">$50</td>
              </tr>
              <tr>
                <td>Shipping:</td>
                <td className="right-col">$50</td>
              </tr>
              <tr id="space"></tr>
            </table>
          </div>
          <div className="grand-total">
            <table>
              <td>Grand Total:</td>
              <td className="right-col">$550</td>
            </table>
          </div>
        </div>
        <div className="checkout-btn">
          <Button btnLabel="Check Out" />
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
