import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constant/Colors'; // Corrected path

export default function BackButton({ onPress, label = 'Back' }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Ionicons name="chevron-back" size={24} color={Colors.primary} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 50, // Adjust depending on SafeArea (e.g., iPhone notch)
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10,
  },
  text: {
    fontSize: 16,
    color: Colors.primary,
    marginLeft: 4,
    fontWeight: '600',
  },
});