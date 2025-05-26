/**
 * Main App Component
 * 
 * This is the root component of the Taste of Caribbean App. It manages:
 * - The menu items data
 * - The shopping cart state
 * - Navigation between Menu and Order Summary screens
 * - Cart operations (add, increase, decrease quantity)
 * 
 * The app uses a simple tab-based navigation between the Menu and Order Summary.
 * All cart operations and calculations happen in this component and are passed
 * down to child components as props.
 */
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Alert, View, TouchableOpacity, Text } from 'react-native';
import Menu from './components/menu/Menu';
import OrderSummary from './components/checkout/OrderSummary';

/**
 * Menu Items Data
 * 
 * This array contains all the food items available in the app.
 * Each item has: id, name, category, price, description, and image.
 * These items are passed to the Menu component for display.
 */
const MENU_ITEMS = [
  { id: '1', name: 'Escovitch Fish', category: 'Main Dishes', price: 12.99, description: 'Crispy fried fish topped with tangy pickled vegetables.', image: require('./assets/images/escovitch-fish.jpg') },
  { id: '2', name: 'Oxtail Stew', category: 'Main Dishes', price: 14.99, description: 'Slow-cooked oxtail in a rich, flavorful gravy with butter beans.', image: require('./assets/images/oxtail-stew.jpg') },
  { id: '3', name: 'Fried Plantains', category: 'Appetizers', price: 4.99, description: 'Sweet and crispy fried plantains, a Caribbean favorite.', image: require('./assets/images/fried-plantains.jpg') },
  { id: '4', name: 'Rum Punch', category: 'Drinks', price: 6.99, description: 'A refreshing blend of rum, tropical juices, and a hint of spice.', image: require('./assets/images/rum punch.jpg') },
  { id: '5', name: 'Sorrel', category: 'Drinks', price: 6.99, description: 'A sweet holiday drink made using natural hibsicus leaves.', image: require('./assets/images/Sorrel.jpg') },
  { id: '6', name: 'Jerk Chicken', category: 'Main Dishes', price: 13.99, description: 'Chicken Marinated authetnic Jamaican spices and cooked too perfection', image: require('./assets/images/JerkChicken.jpg') },
  { id: '7', name: 'Beef Patty', category: 'Appetizers', price: 3.99, description: 'A flaky savory pastry, filled with highly seasoned beef', image: require('./assets/images/BeefPatty.jpg') },
  { id: '8', name: 'Curry Goat', category: 'Main Dishes', price: 14.99, description: 'Tender, goat simmered in bold Jamaican curry spices, bursting with island heat', image: require('./assets/images/CurryGoat.jpg') },
];

/**
 * Main App Component
 * @returns {JSX.Element} The rendered App component
 */
export default function App() {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('Menu');

  /**
   * Adds an item to the cart or increases its quantity if already in cart
   * @param {Object} item - The menu item to add to cart
   */
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === item.id);
      if (existing) {
        Alert.alert('Cart Updated', `${item.name} quantity increased!`);
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        Alert.alert('Added to Cart', `${item.name} added to your cart!`);
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  /**
   * Increases the quantity of an item in the cart
   * @param {string} itemId - The ID of the item to increase
   */
  const increaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  /**
   * Decreases the quantity of an item in the cart
   * Removes the item if quantity becomes zero
   * @param {string} itemId - The ID of the item to decrease
   */
  const decreaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  /**
   * Calculate order totals for the OrderSummary component
   * - subtotal: sum of (item price × quantity) for all items
   * - tax: 8% of subtotal
   * - deliveryFee: $3.99 if cart has items, otherwise $0
   * - total: subtotal + tax + deliveryFee
   */
  // Calculate totals for OrderSummary
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const deliveryFee = cart.length > 0 ? 3.99 : 0;
  const total = subtotal + tax + deliveryFee;

  /**
   * Tab Bar Component - Handles navigation between Menu and Order Summary screens
   * @returns {JSX.Element} The rendered TabBar component
   */
  // Tab bar component
  const TabBar = () => (
    <View style={styles.tabBar}>
      <TouchableOpacity
        style={[styles.tabButton, activeTab === 'Menu' && styles.activeTabButton]}
        onPress={() => setActiveTab('Menu')}
      >
        <Text style={[styles.tabText, activeTab === 'Menu' && styles.activeTabText]}>Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabButton, activeTab === 'OrderSummary' && styles.activeTabButton]}
        onPress={() => setActiveTab('OrderSummary')}
        disabled={cart.length === 0}
      >
        <Text style={[styles.tabText, activeTab === 'OrderSummary' && styles.activeTabText]}>Order Summary</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {activeTab === 'OrderSummary' ? (
        <OrderSummary
          orderItems={cart}
          subtotal={subtotal}
          tax={tax}
          deliveryFee={deliveryFee}
          total={total}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      ) : (
        <Menu menuItems={MENU_ITEMS} addToCart={addToCart} />
      )}
      <TabBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#2e8b57',
  },
  tabText: {
    fontSize: 16,
    color: '#333',
  },
  activeTabText: {
    color: '#2e8b57',
    fontWeight: 'bold',
  },
});
