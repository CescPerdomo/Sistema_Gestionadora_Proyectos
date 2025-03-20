"use client";

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    // Simulación simple: según el email asignamos un rol.
    if (email === "admin@udbproyectos.com" && password === "1234") {
      setUser({ id: 1, username: "Administrador", email, role: "admin" });
      return true;
    } else if (email === "gerencia1@udbproyectos.com" && password === "1234") {
      setUser({ id: 2, username: "Gerente1", email, role: "gerente" });
      return true;
    } else if (email === "miembro1@udbproyectos.com" && password === "1234") {
      setUser({ id: 3, username: "Miembro1", email, role: "miembro" });
      return true;
    } else {
      return false;
    }
  };

  const register = async ({ username, email, password }) => {
    // Para el registro, asignamos por defecto el rol "miembro"
    setUser({ id: Date.now(), username, email, role: "miembro" });
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

