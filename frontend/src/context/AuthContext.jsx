import React, { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);

  const AuthorizationToken = `Bearer ${token}`;
  const isLoggedIn = !!token;

  const saveTokenToLocalStorage = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  const LogoutUser = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
  };

  const userAuthentication = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const getService = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/auth/service", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      setService(result.services);
    } catch {
      // Handle service fetch error silently
    }
  };

  useEffect(() => {
    getService();
    if (token) {
      userAuthentication();
    } else {
      setUser(null);
      setLoading(false);
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        saveTokenToLocalStorage,
        LogoutUser,
        isLoggedIn,
        user,
        service,
        AuthorizationToken,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

