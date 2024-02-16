import React, { createContext, useContext, useState } from 'react';

// Create a context for businessName
const BusinessNameContext = createContext();

// Create a provider component for businessName
export const BusinessNameProvider = ({ children, initialBusinessName }) => {
    const collapseSpacing = (value) => {
        if (typeof value !== 'string') {
            return value;
        }
    
        return value.replace(/\s+/g, '');
    };
      const [businessName, setBusinessName] = useState(collapseSpacing(initialBusinessName));

  return (
    <BusinessNameContext.Provider value={{ businessName, setBusinessName }}>
      {children}
    </BusinessNameContext.Provider>
  );
};

// Custom hook to use the businessName context
export const useBusinessName = () => {
  const context = useContext(BusinessNameContext);
  if (!context) {
    throw new Error('useBusinessName must be used within a BusinessNameProvider');
  }
  return context;
};
