import { cn } from "@/lib/utils";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  ChevronRight,
  Minus,
} from "lucide-react";
import { useState } from "react";

const SessionsMetrics = () => {
  const [activeGame, setActiveGame] = useState("scrabble");
  return (
    <div className="space-y-3">
      <div className="w-full border rounded-md bg-white">
        <div className="p-4 border-b flex items-center justify-between">
          <h1 className=" font-semibold text-black">Training sessions</h1>
          <ChevronRight size={14} />
        </div>

        <div className=" py-4 flex flex-col gap-4">
          <div className="px-4 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="font-medium text-sm">Total classes</p>
              <div className="grid grid-cols-2 w-36 h-8 rounded-md divide-x border">
                <button className="w-full h-full text-sm lowercase font-medium bg-neutral-100">
                  Month
                </button>
                <button className="w-full h-full text-sm lowercase font-medium">
                  Week
                </button>
              </div>
            </div>
            <p className="text-5xl font-bold tracking-tighter">
              30{" "}
              <span className="text-sm tracking-normal font-bold text-neutral-400">
                classes
              </span>
            </p>
            <div className="flex gap-1 items-center">
              <div className="flex items-center gap-1 text-green-500">
                <ArrowUp size={16} strokeWidth={4} />
                <p className="font-bold">34.86%</p>
              </div>
              <p className="text-xs font-bold uppercase text-neutral-300">
                vs previous 28 days
              </p>
            </div>
          </div>
          <hr />
          <div className="px-4 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="font-medium text-sm">Active classes</p>
              <div className="grid grid-cols-2 w-36 h-8 rounded-md divide-x border">
                <button className="w-full h-full text-sm lowercase font-medium bg-neutral-100">
                  Today
                </button>
                <button className="w-full h-full text-sm lowercase font-medium">
                  Week
                </button>
              </div>
            </div>
            <p className="text-5xl font-bold tracking-tighter">
              1
              <span className="ml-2 text-sm tracking-normal font-bold text-neutral-400">
                class
              </span>
            </p>
            <div className="flex gap-1 items-center">
              <div className="flex items-center gap-1 text-red-500">
                <ArrowDown size={16} strokeWidth={4} />
                <p className="font-bold">4.21%</p>
              </div>
              <p className="text-xs font-bold uppercase text-neutral-300">
                vs previous day
              </p>
            </div>
          </div>
          <hr />
          <div className="px-4 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="font-medium text-sm">Cancelled classes</p>
              <div className="grid grid-cols-2 w-36 h-8 rounded-md divide-x border">
                <button className="w-full h-full text-sm lowercase font-medium bg-neutral-100">
                  Month
                </button>
                <button className="w-full h-full text-sm lowercase font-medium">
                  Week
                </button>
              </div>
            </div>
            <p className="text-5xl font-bold tracking-tighter">
              0{" "}
              <span className="text-sm tracking-normal font-bold text-neutral-400">
                classes
              </span>
            </p>
            <div className="flex gap-1 items-center">
              <div className="flex items-center gap-1 text-yellow-500">
                <Minus size={16} strokeWidth={4} />
                <p className="font-bold">0%</p>
              </div>
              <p className="text-xs font-bold uppercase text-neutral-300">
                vs previous 28 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionsMetrics;
