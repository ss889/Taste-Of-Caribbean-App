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

const OrderSummary = ({ orderItems, subtotal, tax, deliveryFee, total }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Summary</Text>
      
      <View style={styles.itemsContainer}>
        {orderItems.map((item, index) => (
          <View key={index} style={styles.orderItem}>
            <View style={styles.imageContainer}>
              <Image 
                source={item.name === "Jerk Chicken Plate" ? 
                  require('../../assets/styles/images/jerk chicken.png') :
                  require('../../assets/styles/images/oxtail.jpg')} 
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <View style={styles.customizationContainer}>
                {item.customizations && item.customizations.map((custom, idx) => (
                  <View key={idx} style={styles.customizationTag}>
                    <Text style={styles.customizationText}>{custom}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.quantity}>x{item.quantity}</Text>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow}>
          <Text>Subtotal</Text>
          <Text>${subtotal.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text>Tax</Text>
          <Text>${tax.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text>Delivery Fee</Text>
          <Text>${deliveryFee.toFixed(2)}</Text>
        </View>
        <View style={[styles.summaryRow, styles.totalRow]}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalText}>${total.toFixed(2)}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.buttonText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  itemsContainer: {
    marginBottom: 16,
  },
  orderItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  imageContainer: {
    width: 80,
    height: 80,
    marginRight: 12,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 4,
  },
  itemDescription: {
    color: '#666',
    fontSize: 14,
    marginBottom: 4,
  },
  customizationContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  customizationTag: {
    backgroundColor: '#e8f4ff',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    marginRight: 4,
    marginBottom: 4,
  },
  customizationText: {
    color: '#4a90e2',
    fontSize: 12,
  },
  priceContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: 70,
  },
  quantity: {
    color: '#666',
    marginBottom: 4,
  },
  price: {
    fontWeight: 'bold',
  },
  summaryContainer: {
    marginTop: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    marginTop: 8,
    paddingTop: 8,
  },
  totalText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  checkoutButton: {
    backgroundColor: '#f57c00',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default OrderSummary;
