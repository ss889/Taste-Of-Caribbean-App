import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import icons from Expo vector-icons

export default function HomeScreen({ userName = 'Guest', navigation }) {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabPress = (tab) => {
    setActiveTab(tab);
    if (tab === 'Account') {
      navigation.navigate('MyAccountScreen'); // Navigate to MyAccountScreen
    }
  };

  return (
    <View style={styles.container}>
      {/* Main Content */}
      <Text style={styles.title}>🏝️ Welcome, {userName}! 🏝️</Text>
      <Text style={styles.subtitle}>Enjoy delicious Caribbean food 🍛</Text>

      {/* Bottom Navigation Bar */}
      <View style={styles.navbar}>
        {/* Navigation Items */}
        <TouchableOpacity style={styles.navItem} onPress={() => handleTabPress('Home')}>
          <Ionicons
            name="home-outline"
            size={30}
            color={activeTab === 'Home' ? '#FF5733' : 'black'}
          />
          <Text style={[styles.navText, activeTab === 'Home' && styles.activeTab]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => handleTabPress('Menu')}>
          <Ionicons
            name="restaurant-outline"
            size={30}
            color={activeTab === 'Menu' ? '#FF5733' : 'black'}
          />
          <Text style={[styles.navText, activeTab === 'Menu' && styles.activeTab]}>Menu</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => handleTabPress('Rewards')}>
          <Ionicons
            name="gift-outline"
            size={30}
            color={activeTab === 'Rewards' ? '#FF5733' : 'black'}
          />
          <Text style={[styles.navText, activeTab === 'Rewards' && styles.activeTab]}>Rewards</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => handleTabPress('Cart')}>
          <Ionicons
            name="bag-outline"
            size={30}
            color={activeTab === 'Cart' ? '#FF5733' : 'black'}
          />
          <Text style={[styles.navText, activeTab === 'Cart' && styles.activeTab]}>Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => handleTabPress('Account')}>
          <Ionicons
            name="person-circle-outline"
            size={30}
            color={activeTab === 'Account' ? '#FF5733' : 'black'}
          />
          <Text style={[styles.navText, activeTab === 'Account' && styles.activeTab]}>Account</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    paddingBottom: 80, // Allow space for the bottom navbar
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
  activeTab: {
    color: '#FF5733', // Active tab color
  },
});
