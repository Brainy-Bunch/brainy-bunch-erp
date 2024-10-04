"use client";

import Header from "@/app/_components/shared/header";
import { useAuth } from "@/app/context/authContext";

const CoachDashboard = () => {
  const user = useAuth();
  return (
    <div>
      <Header role={user.user?.role || ""} />
    </div>
  );
};

export default CoachDashboard;
