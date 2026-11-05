import { useState } from "react";
import { SombraModeContext } from "./SombraModeContext";

export function SombraModeProvider({ children }) {
  const [sombraMode, setSombraMode] = useState(false);

  const toggleSombraMode = () => {
    setSombraMode((prev) => !prev);
    console.log(sombraMode);
  };

  return (
    <SombraModeContext.Provider value={{ sombraMode, toggleSombraMode }}>
      {children}
    </SombraModeContext.Provider>
  );
}

export default SombraModeProvider;
