import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Appetizers', 'Main Dishes', 'Drinks'];
  const menuItems = [
    { id: '1', name: 'Escovitch Fish', category: 'Main Dishes', price: '$12.99', description: 'Crispy fried fish topped with tangy pickled vegetables.', image: require('../../assets/images/escovitch-fish.jpg') },
    { id: '2', name: 'Oxtail Stew', category: 'Main Dishes', price: '$14.99', description: 'Slow-cooked oxtail in a rich, flavorful gravy with butter beans.', image: require('../../assets/images/oxtail-stew.jpg') },
    { id: '3', name: 'Fried Plantains', category: 'Appetizers', price: '$4.99', description: 'Sweet and crispy fried plantains, a Caribbean favorite.', image: require('../../assets/images/fried-plantains.jpg') },
    { id: '4', name: 'Rum Punch', category: 'Drinks', price: '$6.99', description: 'A refreshing blend of rum, tropical juices, and a hint of spice.', image: require('../../assets/images/rum punch.jpg') },
    { id: '5', name: 'Sorrel', category: 'Drinks', price: '$6.99', description: 'A sweet holiday drink made using natural hibsicus leaves.', image: require('../../assets/images/Sorrel.jpg') },
    { id: '6', name: 'Jerk Chicken', category: 'Main Dishes', price: '$13.99', description: 'Chicken Marinated authetnic Jamaican spices and cooked too perfection', image: require('../../assets/images/JerkChicken.jpg') },
    { id: '7', name: 'Beef Patty', category: 'Appetizers', price: '$3.99', description: 'A flaky savory pastry, filled with highly seasoned beef', image: require('../../assets/images/BeefPatty.jpg') },
    { id: '8', name: 'Curry Goat', category: 'Main Dishes', price: '$14.99', description: 'Tender, goat simmered in bold Jamaican curry spices, bursting with island heat', image: require('../../assets/images/CurryGoat.jpg') },

  ];

  const filteredItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  const renderCategoryButtons = () => (
    <View style={styles.categoryContainer}>
      {categories.map(category => (
        <TouchableOpacity
          key={category}
          style={[
            styles.categoryButton,
            selectedCategory === category && styles.selectedCategoryButton,
          ]}
          onPress={() => setSelectedCategory(category)}
        >
          <Text style={styles.categoryText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      {renderCategoryButtons()}
      <FlatList
        data={filteredItems}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#2c3e50',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  categoryButton: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#ecf0f1',
    borderRadius: 20,
  },
  selectedCategoryButton: {
    backgroundColor: '#3498db',
  },
  categoryText: {
    color: '#2c3e50',
    fontWeight: 'bold',
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#34495e',
  },
  itemPrice: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 10,
    textAlign: 'center',
  },
  addToCartButton: {
    backgroundColor: '#3498db',
    padding: 8,
    borderRadius: 5,
  },
  addToCartText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default Menu;


/**
 * Menu Page
 * 
 * What this file does:
 * - Shows all food items in a nice grid
 * - Lets users filter by category (Appetizers, Main Dishes, etc.)
 * - Shows food pictures, prices, and descriptions
 * - Lets users add items to cart
 * 
 * Components needed:
 * - Category filter buttons
 * - Food item cards
 * - Add to cart buttons
 * 
 * Features to add:
 * 1. Food categories (Appetizers, Main Dishes, Drinks)
 * 2. Food cards with pictures
 * 3. Prices and descriptions
 * 4. Add to cart button
 * 5. Quantity selector
 */
