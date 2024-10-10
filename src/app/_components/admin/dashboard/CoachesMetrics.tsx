import { cn } from "@/lib/utils";
import { ArrowUpDown, ChevronRight, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import WidgetLayout from "./WidgetLayout";

const coachesData = [
  {
    firstName: "John",
    lastName: "Doe",
    sessions: 45,
    billable: 1200, // In USD
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    sessions: 30,
    billable: 850, // In USD
  },
  {
    firstName: "Michael",
    lastName: "Johnson",
    sessions: 50,
    billable: 1350, // In USD
  },
  {
    firstName: "Emily",
    lastName: "Davis",
    sessions: 40,
    billable: 1100, // In USD
  },
  {
    firstName: "Robert",
    lastName: "Wilson",
    sessions: 25,
    billable: 700, // In USD
  },
  {
    firstName: "Sophia",
    lastName: "Brown",
    sessions: 35,
    billable: 950, // In USD
  },
  {
    firstName: "David",
    lastName: "Martinez",
    sessions: 60,
    billable: 1600, // In USD
  },
  {
    firstName: "Olivia",
    lastName: "Garcia",
    sessions: 28,
    billable: 780, // In USD
  },
  {
    firstName: "James",
    lastName: "Lee",
    sessions: 55,
    billable: 1450, // In USD
  },
  {
    firstName: "Isabella",
    lastName: "Clark",
    sessions: 32,
    billable: 870, // In USD
  },
];

const CoachMetrics = () => {
  const totalBillable = coachesData
    .reduce((acc, curr) => acc + curr.billable, 0)
    .toLocaleString("en-Us");
  const coachCount = coachesData.length;
  const totalSessions = coachesData
    .reduce((acc, curr) => acc + curr.sessions, 0)
    .toLocaleString("en-Us");

  const [activeDuration, setActiveDUration] = useState("week");
  return (
    <WidgetLayout title="Coaches Metrics" link="">
      {/* tabs */}
      <div className="w-full lg:w-72 p-4 pb-2">
        <div className="w-full h-9 p-1 grid grid-cols-2  border rounded">
          <button
            onClick={() => setActiveDUration("week")}
            className={cn(
              "text-sm  rounded",
              activeDuration === "week"
                ? "bg-neutral-100 lg:bg-neutral-200/70 text-neutral-800 font-medium"
                : "text-neutral-500"
            )}
          >
            This week
          </button>
          <button
            onClick={() => setActiveDUration("month")}
            className={cn(
              "text-sm rounded",
              activeDuration === "month"
                ? "bg-neutral-100 text-neutral-800 font-medium"
                : "text-neutral-500"
            )}
          >
            This month
          </button>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="w-full grid">
          <div className="w-full mb-3 text-[14px] font-medium grid grid-cols-3">
            <div className="w-full">
              <p>Coach</p>
            </div>
            <div className="w-full flex items-center gap-1">
              <p>Sessions</p>
              <ChevronsUpDown size={10} />
            </div>
            <div className="w-full flex items-center gap-1">
              <p>Amount Billable</p>
              <ChevronsUpDown size={10} />
            </div>
          </div>
          {coachesData.map((coach, index) => {
            return (
              <div
                key={index}
                className={cn(
                  "w-full p-2  grid grid-cols-3 text-[14px] font-medium",
                  index % 2 === 0 ? "bg-slate-100" : "bg-white"
                )}
              >
                <div className="w-full font-medium flex items-center gap-3">
                  <p>{index + 1}.</p>
                  <p className="underline">
                    {coach.firstName} {coach.lastName.slice(0, 1)}.
                  </p>
                </div>
                <div className="w-full text-neutral-500 ">
                  <p>{coach.sessions}</p>
                </div>
                <div className="w-full text-neutral-500 ">
                  <p>Kes {coach.billable.toLocaleString("en-US")}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid gap-2 mt-4">
          <div className="bg-neutral-100 text-sm w-full p-3 rounded-lg flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-yellow-500" />
              <p className="font-medium">Coach count</p>
            </div>
            <p className="text-neutral-600">{coachCount}</p>
          </div>
          <div className=" text-sm w-full p-3 rounded-lg flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-blue-500" />
              <p className="font-medium">Amount billable</p>
            </div>
            <p className="text-neutral-600">Kes {totalBillable}</p>
          </div>
          <div className="bg-neutral-100 text-sm w-full p-3 rounded-lg flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-black" />
              <p className="font-medium">Total sessions</p>
            </div>
            <p className="text-neutral-600">{totalSessions}</p>
          </div>
        </div>
      </div>
    </WidgetLayout>
  );
};

export default CoachMetrics;
