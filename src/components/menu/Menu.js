import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const Menu = ({ menuItems, addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Appetizers', 'Main Dishes', 'Drinks'];

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
      <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <TouchableOpacity style={styles.addToCartButton} onPress={() => addToCart(item)}>
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
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
    color: '#2c3e50',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
    flexWrap: 'wrap',
  },
  categoryButton: {
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginHorizontal: 5,
    marginBottom: 8,
  },
  selectedCategoryButton: {
    backgroundColor: '#ffb300',
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    margin: 8,
    flex: 1,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#222',
    textAlign: 'center',
  },
  itemPrice: {
    fontSize: 16,
    color: '#388e3c',
    marginBottom: 4,
    textAlign: 'center',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    textAlign: 'center',
  },
  addToCartButton: {
    backgroundColor: '#ffb300',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginTop: 4,
  },
  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  flatListContent: {
    paddingBottom: 30,
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
