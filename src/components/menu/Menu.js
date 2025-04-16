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

import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useMenu } from '../../hooks/useMenu.js';

export const Menu = () => {
  const { menuItems, loading, error } = useMenu();
  const [selectedCategory, setSelectedCategory] = useState('All');

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>Error loading menu: {error.message}</Text>
      </View>
    );
  }

  const categories = ['All', ...new Set(menuItems.map(item => item.category))];
  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={categories}
        renderItem={({ item }) => (
          <Text 
            style={[
              styles.category,
              selectedCategory === item && styles.selectedCategory
            ]}
            onPress={() => setSelectedCategory(item)}
          >
            {item}
          </Text>
        )}
        keyExtractor={item => item}
        style={styles.categories}
      />
      
      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        style={styles.grid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categories: {
    marginBottom: 10,
  },
  category: {
    padding: 8,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  selectedCategory: {
    backgroundColor: '#007AFF',
    color: 'white',
  },
  grid: {
    flex: 1,
  },
  card: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#007AFF',
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    color: '#666',
  },
});
