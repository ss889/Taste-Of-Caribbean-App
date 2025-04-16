import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import styles from './Reward.styles';

const rewards = [
  { id: '1', title: 'Free Drink', image: 'https://via.placeholder.com/100' },
  { id: '2', title: '20% Off Meal', image: 'https://via.placeholder.com/100' },
  { id: '3', title: 'Free Dessert', image: 'https://via.placeholder.com/100' },
];

export default function RewardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>🎉 Rewards Center 🎉</Text>
      <FlatList
        data={rewards}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.rewardImage} />
            <Text style={styles.rewardTitle}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}
