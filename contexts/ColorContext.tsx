'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ColorContextType {
  primaryColor: string;
  secondaryColor: string;
  setPrimaryColor: (color: string) => void;
  setSecondaryColor: (color: string) => void;
  resetColors: () => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

const DEFAULT_PRIMARY = '#1a5f5f'; // Dark teal/green
const DEFAULT_SECONDARY = '#e63946'; // Red

export function ColorProvider({ children }: { children: ReactNode }) {
  const [primaryColor, setPrimaryColorState] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('cv-primary-color') || DEFAULT_PRIMARY;
    }
    return DEFAULT_PRIMARY;
  });
  const [secondaryColor, setSecondaryColorState] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('cv-secondary-color') || DEFAULT_SECONDARY;
    }
    return DEFAULT_SECONDARY;
  });

  const setPrimaryColor = (color: string) => {
    setPrimaryColorState(color);
    localStorage.setItem('cv-primary-color', color);
  };

  const setSecondaryColor = (color: string) => {
    setSecondaryColorState(color);
    localStorage.setItem('cv-secondary-color', color);
  };

  const resetColors = () => {
    setPrimaryColorState(DEFAULT_PRIMARY);
    setSecondaryColorState(DEFAULT_SECONDARY);
    localStorage.removeItem('cv-primary-color');
    localStorage.removeItem('cv-secondary-color');
  };

  return (
    <ColorContext.Provider value={{ 
      primaryColor, 
      secondaryColor, 
      setPrimaryColor, 
      setSecondaryColor,
      resetColors 
    }}>
      {children}
    </ColorContext.Provider>
  );
}

export function useColors() {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error('useColors must be used within a ColorProvider');
  }
  return context;
}

