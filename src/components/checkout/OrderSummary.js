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
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const OrderSummary = ({ orderItems, subtotal, tax, deliveryFee, total, increaseQuantity, decreaseQuantity }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Summary</Text>
      <View style={styles.itemsContainer}>
        {orderItems.length === 0 ? (
          <Text style={styles.emptyText}>Your cart is empty.</Text>
        ) : (
          orderItems.map((item, index) => (
            <View key={item.id} style={styles.orderItem}>
              <View style={styles.imageContainer}>
                <Image 
                  source={item.image} 
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
                <View style={styles.quantityRow}>
                  <TouchableOpacity style={styles.qtyButton} onPress={() => decreaseQuantity(item.id)}>
                    <Text style={styles.qtyButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{item.quantity}</Text>
                  <TouchableOpacity style={styles.qtyButton} onPress={() => increaseQuantity(item.id)}>
                    <Text style={styles.qtyButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))
        )}
      </View>
      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal:</Text>
          <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Tax (8%):</Text>
          <Text style={styles.summaryValue}>${tax.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Delivery Fee:</Text>
          <Text style={styles.summaryValue}>${deliveryFee.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={[styles.summaryLabel, styles.totalLabel]}>Total:</Text>
          <Text style={[styles.summaryValue, styles.totalValue]}>${total.toFixed(2)}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.placeOrderButton} disabled={orderItems.length === 0}>
        <Text style={styles.placeOrderText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#2c3e50',
    alignSelf: 'center',
  },
  itemsContainer: {
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginVertical: 24,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    elevation: 1,
  },
  imageContainer: {
    width: 60,
    height: 60,
    marginRight: 12,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#eee',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  itemPrice: {
    fontSize: 14,
    color: '#666',
  },
  itemDescription: {
    fontSize: 13,
    color: '#666',
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  qtyButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  qtyButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2e8b57',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    minWidth: 24,
    textAlign: 'center',
  },
  summaryContainer: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12,
    marginTop: 10,
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#333',
  },
  summaryValue: {
    fontSize: 16,
    color: '#333',
  },
  totalLabel: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  totalValue: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#d84315',
  },
  placeOrderButton: {
    backgroundColor: '#ffb300',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
    opacity: 1,
  },
  placeOrderText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default OrderSummary;
