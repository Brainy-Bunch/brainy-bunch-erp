"use client";

import SessionsMetrics from "@/app/_components/admin/dashboard/SessionsMetrics";
import Header from "@/app/_components/shared/header";
import { useAuth } from "@/app/context/authContext";
import { Calendar, Clock, User } from "lucide-react";

const Dashboard = () => {
  const user = useAuth();
  return (
    <div className="bg-neutral-50">
      <Header role={user.user?.role || ""} />
      <div className="px-4">
        <div className="mt-6 space-y-16">
          <SessionsMetrics />

          {/* upcoming classes */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h1 className=" text-lg font-medium text-black">
                Upcoming sessions
              </h1>
            </div>
            <div className="flex flex-col  gap-4">
              <div className="w-full bg-white shadow border border-neutral-200 rounded-lg p-4 space-y-1">
                <p className="text-neutral-700 mb-2 text-lg font-medium tracking-tight">
                  Consolata Catholic School Session
                </p>

                <div className="flex items-center gap-3 text-neutral-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    June 15, 2024
                  </div>{" "}
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    2:00 PM - 9:00PM
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-neutral-500">
                  <User size={14} />
                  Instructor: Jeff Gichuki
                </div>
                <br />
                <button className="text-sm p-3 px-4 w-full rounded-lg bg-neutral-700 text-neutral-100 font-medium">
                  More details
                </button>
              </div>
              <div className="w-full bg-white shadow border border-neutral-200 rounded-lg p-4 space-y-1">
                <p className="text-neutral-700 mb-2 text-lg font-medium tracking-tight">
                  Consolata Catholic School Session
                </p>

                <div className="flex items-center gap-3 text-neutral-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    June 15, 2024
                  </div>{" "}
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    2:00 PM - 9:00PM
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-neutral-500">
                  <User size={14} />
                  Instructor: Jeff Gichuki
                </div>
                <br />
                <button className="text-sm p-3 px-4 w-full rounded-lg bg-neutral-700 text-neutral-100 font-medium">
                  More details
                </button>
              </div>
              <div className="w-full border border-neutral-200 rounded-lg p-4 space-y-1">
                <p className="text-neutral-700 mb-2 text-lg font-medium tracking-tight">
                  Consolata Catholic School Session
                </p>

                <div className="flex items-center gap-3 text-neutral-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    June 15, 2024
                  </div>{" "}
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    2:00 PM - 9:00PM
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-neutral-500">
                  <User size={14} />
                  Instructor: Jeff Gichuki
                </div>
                <br />
                <button className="text-sm p-3 px-4 w-full rounded-lg bg-neutral-700 text-neutral-100 font-medium">
                  More details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
