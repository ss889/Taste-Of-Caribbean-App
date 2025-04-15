import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../../context/AuthContext';
import styles from './Home.styles';

export default function HomeScreen({ navigation }) {
  const { user } = useContext(AuthContext);
  const userName = user?.username || 'Guest';
  const [activeTab, setActiveTab] = useState('Home');
  const tabs = [
    { key: 'Home', icon: 'home-outline', label: 'Home' },
    { key: 'Menu', icon: 'restaurant-outline', label: 'Menu' },
    { key: 'Rewards', icon: 'gift-outline', label: 'Rewards' },
    { key: 'Cart', icon: 'bag-outline', label: 'Cart' },
    { key: 'Account', icon: 'person-circle-outline', label: 'Account' },
  ];

  const handleTabPress = (tab) => {
    setActiveTab(tab);
    if (tab === 'Account') {
      navigation.navigate('MyAccountScreen');
    }
    else if (tab === 'Rewards') {
      navigation.navigate('RewardScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏝️ Welcome, {userName}! 🏝️</Text>
      <Text style={styles.subtitle}>Enjoy delicious Caribbean food 🍛</Text>

      <View style={styles.navbarContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity key={tab.key} style={styles.navItem} onPress={() => handleTabPress(tab.key)}>
            <Ionicons
              name={tab.icon}
              size={26}
              color={activeTab === tab.key ? '#FF5733' : '#333'}
            />
            <Text style={[styles.navText, activeTab === tab.key && styles.activeText]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
