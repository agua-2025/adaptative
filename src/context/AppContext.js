import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [clients, setClients] = useState([]);
  const [readings, setReadings] = useState([]);
  const [config, setConfig] = useState({
    baseRate: 1.5,
    consumptionGroups: [
      { name: 'Residencial', rate: 1.5 },
      { name: 'Comercial', rate: 2.0 },
    ],
  });

  return (
    <AppContext.Provider value={{ clients, setClients, readings, setReadings, config, setConfig }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);