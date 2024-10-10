"use client";

import ClientMetrics from "@/app/_components/admin/dashboard/ClientMetrics";
import CoachMetrics from "@/app/_components/admin/dashboard/CoachesMetrics";
import GameParticipation from "@/app/_components/admin/dashboard/GameParticipation";
import OperatingExpenses from "@/app/_components/admin/dashboard/OperatingExpenses";
import SalesMetrics from "@/app/_components/admin/dashboard/SalesMetrics";
import SessionsMetrics from "@/app/_components/admin/dashboard/SessionsMetrics";
import UpcomingSessions from "@/app/_components/admin/dashboard/upcoming-sessions";
import Header from "@/app/_components/shared/header";
import Navigationbar from "@/app/_components/shared/navigation-bar";
import { useAuth } from "@/app/context/authContext";
import PageLayout from "../../page-layout";

const Dashboard = () => {
  return (
    <PageLayout>
      <div className="px-4 lg:p-0 w-full flex flex-col mx-auto !h-full">
        <div className="grid gap-1 w-full max-w-6xl lg:py-10 mx-auto">
          <h1 className="text-[32px] font-semibold tracking-tight">
            Dashboard overview
          </h1>
          <small className="text-neutral-500">
            View and manage metrics spannig different activities in the
            organisation
          </small>
        </div>
        <hr />
        <div className="mt-6 lg:mt-12  lg:space-y-0 max-w-5xl w-full mx-auto lg:grid lg:grid-cols-5 lg:gap-3">
          <div className="col-span-1"></div>
          <div className="col-span-4 space-y-8">
            <SessionsMetrics />
            <GameParticipation />
            <CoachMetrics />
            {/* <UpcomingSessions /> */}
            <ClientMetrics />
          <SalesMetrics />
          </div>

          {/* 
   
          <OperatingExpenses /> */}
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
