"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ allowedRoles, children }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user || (allowedRoles && !allowedRoles.includes(user.role))) {
      // Si el usuario no está logueado o no tiene un rol permitido,
      // redirige al login (o a otra página de acceso denegado solicitando contacto con el administrador)
      router.push("/auth/login");
    }
  }, [user, allowedRoles, router]);

  // Mientras no se verifique o se redirija, se podría mostrar un loader
  if (!user || (allowedRoles && !allowedRoles.includes(user.role))) {
    return <p>Cargando...</p>;
  }

  return children;
}
