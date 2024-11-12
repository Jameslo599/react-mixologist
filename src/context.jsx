import { createContext, useContext } from 'react';

export const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  return (
    <GlobalContext.Provider values={''}>{children}</GlobalContext.Provider>
  );
};
export default AppContext;
