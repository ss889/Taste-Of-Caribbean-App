import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [registrationData, setRegistrationData] = useState(null);

  return (
    <AuthContext.Provider value={{ registrationData, setRegistrationData }}>
      {children}
    </AuthContext.Provider>
  );
}
