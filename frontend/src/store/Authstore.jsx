import { createContext, useContext, useState, useEffect } from "react";

// Creating the AuthContext to manage authentication state globally
export const AuthContext = createContext();

// AuthProvider component to provide authentication state to all children components
export const AuthProvider = ({ children }) => {
  // State to store token, user data, and services data
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [service, setService] = useState("");

  // Function to store token after successful login
  const storeTokenProps = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  // Check if the user is logged in by verifying the token
  const isLoggedIn = !!token;

  // Logout function to remove token and clear state
  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
    setUser("");
    setService("");
  };

  // API Call to fetch user data (using token for authentication)
  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:8000/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (err) {
      console.error("Error in user authentication:", err.message);
    }
  };

  // API Call to fetch service data (public data without authentication)
  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:8000/service", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setService(data.msg);
      } else {
        console.error("Failed to fetch service data");
      }
    } catch (err) {
      console.error("Error fetching service data:", err.message);
    }
  };

  // Effect to fetch user data and services data on component mount
  useEffect(() => {
    if (token) {
      userAuthentication();
    }
    getServices();
  }, [token]);

  // Providing authentication-related values to children components
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storeTokenProps,
        LogoutUser,
        user,
        service,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access authentication state and functions using Context API
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
