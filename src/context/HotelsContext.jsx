import { createContext } from "react";

const HotelsContext = createContext();

export const HotelsProvider = ({ children }) => {
  return (
    <HotelsContext.Provider value={{   }}>{children}</HotelsContext.Provider>
  );
};
