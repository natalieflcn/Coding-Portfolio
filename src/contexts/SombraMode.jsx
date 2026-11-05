import { createContext, useContext, useEffect, useState } from "react";

const SombraModeContext = createContext(null);

export function SombraModeProvider({ children }) {
  const [sombraMode, setSombraMode] = useState(false);

  const toggleSombraMode = () => setSombraMode((prev) => !prev);

  return (
    <SombraModeContext.Provider value={{ sombraMode, toggleSombraMode }}>
      {children}
    </SombraModeContext.Provider>
  );
}

export function useSombraMode() {
  const context = useContext(SombraModeContext);

  if (!context)
    throw new Error("useSombraMode must be used within SombraMode Provider.");

  return context;
}
