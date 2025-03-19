"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";

export default function ClientWrapper({ children }) {
  useEffect(() => {
    // Importa Bootstrap JS de forma dinámica (se ejecuta solo en el cliente)
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <AuthProvider>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 d-none d-md-block">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <main className="my-4">{children}</main>
          </div>
        </div>
      </div>
      <Footer />
    </AuthProvider>
  );
}

