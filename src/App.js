import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Alert, View, TouchableOpacity, Text } from 'react-native';
import Menu from './components/menu/Menu';
import OrderSummary from './components/checkout/OrderSummary';

// Standardized menu items (from Menu.js)
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

export default function App() {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('Menu');

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

  const increaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Calculate totals for OrderSummary
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const deliveryFee = cart.length > 0 ? 3.99 : 0;
  const total = subtotal + tax + deliveryFee;

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
