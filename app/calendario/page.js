"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import CalendarView from "@/components/CalendarView";

export default function CalendarioPage() {
  return (
    <ProtectedRoute allowedRoles={[]}>
      <CalendarView />
    </ProtectedRoute>
  );
}

