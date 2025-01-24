
import { createContext, useContext, useState } from 'react';


const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(false); 
  return (
    <UserContext.Provider value={{ token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para consumir el contexto
export const useUser = () => useContext(UserContext);
