import { createContext, useState } from "react";

export const DataContext = createContext({
  isSidebarOpen: false,
  setIsSidebarOpen: () => {},
  smallSidebarOpen: true,
  setSmallSidebarOpen: () => {},
});

export const DataProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [smallSidebarOpen, setSmallSidebarOpen] = useState(true);

  const value = {
    sidebarOpen,
    setSidebarOpen,
    smallSidebarOpen,
    setSmallSidebarOpen,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
