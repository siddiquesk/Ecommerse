import { createContext, useContext, useState, useEffect } from "react";

// Creating the AuthContext to manage authentication state globally
export const AuthContext = createContext();

// AuthProvider component to provide authentication state to all children components
export const AuthProvider = ({ children }) => {
  // Initializing token state from localStorage (if it exists)
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [service, setService] = useState("");
  // Function to store the token in localStorage (after login)
  const storeTokenProps = (servertoken) => {
    setToken(servertoken);
    localStorage.setItem("token", servertoken);
  };

  // Checking if the user is logged in based on the existence of a token
  const isLoggedIn = !!token; // Converts token to a boolean (true if token exists, false otherwise)
  console.log(token); // Debug log to check the current token value

  // Function to log out the user by removing the token and updating the state
  const LogoutUser = () => {
    setToken(""); // Clear the token from state
    localStorage.removeItem("token"); // Remove the token from localStorage
  };

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
        console.log("userdata", data.userData);
        setUser(data.userData);
      }
    } catch (err) {}
  };

  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:8000/service", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        console.log("services", data.msg);
        setService(data.msg);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    userAuthentication();
    getServices();
  }, []);

  //jwt authentication logic in backend folder middleware folder authMiddleware
  // Providing auth-related values to children components using Context API

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storeTokenProps, LogoutUser, user, service }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access authentication state and functions
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider"); // Error if used outside AuthProvider
  return context; // Return the context values
};
