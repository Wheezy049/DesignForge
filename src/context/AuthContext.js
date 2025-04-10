import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const API_BASE_URL = "https://forge-api-5ubm.onrender.com/api/v1";
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check if user is already authenticated
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }
  
      try {
        const response = await fetch(`${API_BASE_URL}/users`, {
          headers: { Authorization: `Bearer ${token}` },
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log(data); // Check if the response structure is what you expect
  
          // Adjust to access the correct part of the response
          if (data?.data?.data) {
            setUser(data.data.data[0]); // This accesses the first user object in the array
            navigate("/dashboard");
          } else {
            console.error("User data not found.");
            localStorage.removeItem("token");
            setUser(null);
          }
        } else {
          localStorage.removeItem("token");
          setUser(null);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchUser();
  }, []);
  

  const login = async (userData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      console.log(data)
      if (response.ok) {
        localStorage.setItem("token", data.data.accessToken);
        navigate("/dashboard");
      } else {
        throw new Error(data.message || "Login failed");
      }
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/signin");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
