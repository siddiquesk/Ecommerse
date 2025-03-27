import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storeTokenProps = (servertoken) => {
    return localStorage.setItem("token", servertoken);
  };

  return (
    <AuthContext.Provider value={{ storeTokenProps }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("use Auth outside of the provider");
  }
  return authContextValue;
};
