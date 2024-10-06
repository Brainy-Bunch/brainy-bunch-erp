"use client";

import SessionsMetrics from "@/app/_components/admin/dashboard/SessionsMetrics";
import UpcomingSessions from "@/app/_components/admin/dashboard/upcoming-sessions";
import Header from "@/app/_components/shared/header";
import { useAuth } from "@/app/context/authContext";
import { Calendar, Clock, User } from "lucide-react";

const Dashboard = () => {
  const user = useAuth();
  return (
    <div className=" pb-20">
      <Header role={user.user?.role || ""} />
      <div className="px-4">
        <div className="mt-6 space-y-6">
          <SessionsMetrics />
          {/* upcoming classes */}
          <UpcomingSessions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
