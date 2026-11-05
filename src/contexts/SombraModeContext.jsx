import { createContext, useContext } from "react";

export const SombraModeContext = createContext(null);

// export function useSombraMode() {
//   const context = useContext(SombraModeContext);

//   if (!context)
//     throw new Error("useSombraMode must be used within SombraMode Provider.");

//   return context;
// }

export function useSombraMode() {
  const context = useContext(SombraModeContext);

  if (!context)
    throw new Error("useSombraMode must be used within SombraMode Provider.");

  return context;
}
