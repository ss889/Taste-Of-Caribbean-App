import React from 'react';
import { AuthProvider } from './context/AuthContext';
import AppNav from './AppNav';

const App = () => {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
};

export default App;
