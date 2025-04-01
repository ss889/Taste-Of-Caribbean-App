/**
 * Checkout Page
 * 
 * What this file does:
 * - Shows all items in the cart
 * - Calculates the total price
 * - Handles payment and delivery info
 * - Processes the order
 * 
 * Components needed:
 * - Order summary list
 * - Payment form
 * - Delivery address form
 * 
 * Features to add:
 * 1. List of items in cart
 * 2. Total price calculator
 * 3. Payment method selector
 * 4. Delivery address form
 * 5. Place order button
 */
// OrderSummary.js
import React from 'react';

const OrderSummary = ({ orderItems, subtotal, tax, deliveryFee, total }) => {
  return (
    <div className="order-summary-container">
      <h2>Order Summary</h2>
      
      <div className="order-items">
        {orderItems.map((item, index) => (
          <div key={index} className="order-item">
            <div className="item-image">
              {/* Image placeholder - replace with actual image component */}
              <div className="image-placeholder">{item.imageSrc ? "Image" : "No Image"}</div>
            </div>
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="item-customizations">
                {item.customizations && item.customizations.map((custom, idx) => (
                  <span key={idx} className="customization-tag">{custom}</span>
                ))}
              </div>
            </div>
            <div className="item-price-quantity">
              <span className="quantity">x{item.quantity}</span>
              <span className="price">${item.price.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="price-summary">
        <div className="summary-row">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Delivery Fee</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="summary-row total">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
};

export default OrderSummary;
