"use client";

import ClientMetrics from "@/app/_components/admin/dashboard/ClientMetrics";
import CoachMetrics from "@/app/_components/admin/dashboard/CoachesMetrics";
import GameParticipation from "@/app/_components/admin/dashboard/GameParticipation";
import OperatingExpenses from "@/app/_components/admin/dashboard/OperatingExpenses";
import SalesMetrics from "@/app/_components/admin/dashboard/SalesMetrics";
import SessionsMetrics from "@/app/_components/admin/dashboard/SessionsMetrics";
import UpcomingSessions from "@/app/_components/admin/dashboard/upcoming-sessions";
import Header from "@/app/_components/shared/header";
import { useAuth } from "@/app/context/authContext";

const Dashboard = () => {
  const user = useAuth();
  return (
    <div className=" pb-20">
      <Header role={user.user?.role || ""} />
      <div className="px-4">
        <div className="mt-6 space-y-16">
          <SessionsMetrics />
          <UpcomingSessions />
          <GameParticipation />
          <CoachMetrics />
          <SalesMetrics />
          <ClientMetrics />
          <OperatingExpenses />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
