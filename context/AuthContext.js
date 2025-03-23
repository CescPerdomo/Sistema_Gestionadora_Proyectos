"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Al montar, se recupera la sesión guardada en localStorage (si existe)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    let newUser = null;
    if (email === "admin@udbproyectos.com" && password === "1234") {
      newUser = { id: 1, username: "Administrador", email, role: "admin" };
    } else if (email === "gerencia1@udbproyectos.com" && password === "1234") {
      newUser = { id: 2, username: "Gerente1", email, role: "gerente" };
    } else if (email === "miembro1@udbproyectos.com" && password === "1234") {
      newUser = { id: 3, username: "Miembro1", email, role: "miembro" };
    } else {
      return false;
    }
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    return true;
  };

  const register = async ({ username, email, password }) => {
    const newUser = { id: Date.now(), username, email, role: "miembro" };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}




