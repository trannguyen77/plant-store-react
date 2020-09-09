import React from 'react';

function CartTable() {
    return (
        <div className="cart">
          <table>
            <tr>
              <th className='item'>Items</th>
              <th className='price'>Price</th>
              <th className='quantity'>Quantity</th>
              <th className='total'>Total</th>
            </tr>
            <tbody>
              <tr>
                <td>Item 1</td>
                <td>$50</td>
                <td>10</td>
                <td>$500</td>
              </tr>
              <tr>
                <td>Item</td>
                <td>$50</td>
                <td>10</td>
                <td>$500</td>
              </tr>
            </tbody>
          </table>
        </div>
    )}

    export default CartTable;