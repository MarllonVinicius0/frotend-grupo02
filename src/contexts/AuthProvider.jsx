import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [userRole, setUserRole] = useState(null); // 'admin' ou 'user'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //Credintials
  const login = async () => {
    setLoading(true);
    setError(null);
    try {
      // Simulação temporária
      setTimeout(() => {
        setToken("fake-token");
        setIsLoggedIn(true);
        setUserRole("admin"); // ou 'user'
        localStorage.setItem("token", "fake-token");
        localStorage.setItem("userRole", "admin");
        setLoading(false);
      }, 1000);
    } catch (err) {
      console.error(err);
      setError(err?.message || "Falha no login.");
      setIsLoggedIn(false);
      setToken(null);
      setUserRole(null);
      setLoading(false);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setToken(null);
    setUserRole(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
  };

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedRole = localStorage.getItem("userRole");
    if (savedToken && savedRole) {
      setToken(savedToken);
      setUserRole(savedRole);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, token, userRole, login, logout, loading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
}
