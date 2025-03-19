"use client"; // Required for Next.js app directory

import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context
interface PreferredHouseContextType {
  preferredHouse: string;
  setPreferredHouse: (house: string) => void;
}

// Create context with default values
const PreferredHouseContext = createContext<PreferredHouseContextType | undefined>(undefined);

// Context Provider
export function PreferredHouseProvider({ children }: { children: ReactNode }) {
  const [preferredHouse, setPreferredHouse] = useState<string>("");

  return (
    <PreferredHouseContext.Provider value={{ preferredHouse, setPreferredHouse }}>
      {children}
    </PreferredHouseContext.Provider>
  );
}

// Custom hook to use the context
export function usePreferredHouse() {
  const context = useContext(PreferredHouseContext);
  if (!context) {
    throw new Error("usePreferredHouse must be used within a PreferredHouseProvider");
  }
  return context;
}
