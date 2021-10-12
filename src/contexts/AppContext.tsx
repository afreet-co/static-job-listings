import { createContext, FC, useContext, useState } from "react";

export type AppContextType = {};

const initialValue: AppContextType = {};

export const AppContext = createContext<AppContextType>(initialValue);

export const AppContextProvider: FC = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
