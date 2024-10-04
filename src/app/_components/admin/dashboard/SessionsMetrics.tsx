import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const SessionsMetrics = () => {
  const [activeGame, setActiveGame] = useState("scrabble");
  return (
    <div className="space-y-3">
      <h1 className=" text-lg font-medium text-black">Training sessions</h1>
      <div className="w-full p-2 space-y-2 border rounded-md bg-white">
        <div className="w-full bg-white grid grid-cols-2 p-1 gap-1 border border-neutral-200 rounded h-10">
          <button
            onClick={() => setActiveGame("scrabble")}
            className={cn(
              "w-full h-full text-sm grid rounded-sm place-items-center",
              activeGame === "scrabble"
                ? "bg-neutral-100 text-black"
                : "text-neutral-400 bg-white"
            )}
          >
            Scrabble
          </button>
          <button
            onClick={() => setActiveGame("chess")}
            className={cn(
              "w-full h-full text-sm grid rounded-sm place-items-center",
              activeGame === "chess"
                ? "bg-neutral-100 text-black"
                : "text-neutral-400 bg-white"
            )}
          >
            Chess
          </button>
        </div>

        <div className="flex flex-col gap-4 py-6 border border-neutral-200/60 rounded-sm bg-white">
          <div className="flex flex-col gap-2  px-6">
            <p className="text-neutral-600 flex text-sm justify-between">
              Total sessions this month{" "}
              <a
                href=""
                className="text-xs underline flex items-center text-blue-500"
              >
                details
                <ArrowUpRight size={12} />
              </a>
            </p>{" "}
            <div className="flex items-center gap-3">
              <p className="text-3xl font-semibold tracking-tighter">45</p>
              {/* <div className="text-green-500 flex gap-1 items-center">
            <ArrowUp size={14} strokeWidth={4} />
            <p className="font-bold">34%</p>
          </div> */}
              <div className="text-red-500 flex gap-1 items-center">
                <ArrowDown size={14} strokeWidth={4} />
                <p className="font-bold">30.5%</p>
              </div>
            </div>
          </div>
          <hr className="border-neutral-200/60" />
          <div className="flex flex-col gap-2 px-6">
            <div className="text-neutral-600 flex justify-between">
              <p className="flex gap-2 text-neutral-600 text-sm">
                Ongoing sessions
                <span className="size-1 bg-green-400 rounded-full animate-ping"></span>
              </p>
              <a
                href=""
                className="text-xs underline flex items-center text-blue-500"
              >
                details
                <ArrowUpRight size={12} />
              </a>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-3xl font-semibold tracking-tighter">0</p>
            </div>
          </div>
          <hr className="border-neutral-200/60" />
          <div className="flex flex-col gap-2 px-6">
            <p className="flex gap-2 text-neutral-600 text-sm justify-between">
              Cancelled sessions
              <a
                href=""
                className="text-xs underline flex items-center text-blue-500"
              >
                details
                <ArrowUpRight size={12} />
              </a>
            </p>
            <div className="flex items-center gap-3">
              <p className="text-3xl font-semibold tracking-tighter">4</p>
              <div className="text-green-500 flex gap-1 items-center">
                <ArrowUp size={14} strokeWidth={4} />
                <p className="font-bold">34.86%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionsMetrics;
