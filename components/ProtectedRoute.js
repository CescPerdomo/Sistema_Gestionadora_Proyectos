"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ allowedRoles = [], children }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/auth/login");
    } else if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
      // Si se especifican roles y el usuario no tiene ninguno de ellos, redirige.
      router.push("/auth/login");
    }
  }, [user, allowedRoles, router]);

  if (!user || (allowedRoles.length > 0 && !allowedRoles.includes(user.role))) {
    return <p>Cargando...</p>;
  }

  return children;
}

