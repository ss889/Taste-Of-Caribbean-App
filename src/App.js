import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import OrderSummary from './components/checkout/OrderSummary';

// Sample data
const sampleOrderItems = [
  {
    name: "Jerk Chicken Plate",
    description: "Spicy jerk chicken with rice and peas",
    price: 12.99,
    quantity: 2,
    customizations: ["Extra Spicy", "Extra Sauce"]
  },
  {
    name: "Oxtail Stew",
    description: "Slow-cooked oxtail with butter beans",
    price: 15.99,
    quantity: 1,
    customizations: ["Add Plantains"]
  }
];

const subtotal = sampleOrderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
const tax = subtotal * 0.08;
const deliveryFee = 3.99;
const total = subtotal + tax + deliveryFee;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <OrderSummary
          orderItems={sampleOrderItems}
          subtotal={subtotal}
          tax={tax}
          deliveryFee={deliveryFee}
          total={total}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
