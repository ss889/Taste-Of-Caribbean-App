import React, { useContext } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigation/AuthStack';
import HomeStack from './navigation/HomeStack';
import { AuthContext } from './context/AuthContext';

const AppNav = () => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppNav;
