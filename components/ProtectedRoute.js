"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ allowedRoles = [], children }) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && (!user || (allowedRoles.length > 0 && !allowedRoles.includes(user.role)))) {
      router.push("/auth/login");
    }
  }, [user, isLoading, allowedRoles, router]);

  if (isLoading || !user || (allowedRoles.length > 0 && !allowedRoles.includes(user.role))) {
    return <p>Cargando...</p>;
  }

  return children;
}


