import React from 'react';
import { AuthProvider } from './context/AuthContext'; // Updated path to src/context/AuthContext
import AppNav from './AppNav'; // Updated path to src/AppNav

const App = () => {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
};

export default App;
