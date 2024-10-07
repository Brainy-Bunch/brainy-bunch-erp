import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { ChevronRight } from "lucide-react";


// * configs yo

const clientAcquisitionData = [
    {
      month: "January",
      chess: 15,
      coding: 20,
      scrabble: 10,
    },
    {
      month: "February",
      chess: 18,
      coding: 25,
      scrabble: 12,
    },
    {
      month: "March",
      chess: 20,
      coding: 22,
      scrabble: 15,
    },
    {
      month: "April",
      chess: 25,
      coding: 30,
      scrabble: 18,
    },
    {
      month: "May",
      chess: 28,
      coding: 35,
      scrabble: 20,
    },
    {
      month: "June",
      chess: 30,
      coding: 40,
      scrabble: 22,
    },
  ];
  


const ClientAcquisitionChart = () => {
    return ()
}

const ClientMetrics = () => {
  return (
    <div className="w-full border rounded-md bg-white">
      <div className="p-4 border-b flex items-center justify-between ">
        <h1 className=" font-semibold ">Clients</h1>
        <ChevronRight size={14} strokeWidth={4} />
      </div>
      <div className="p-4 flex flex-col gap-3 border-t">
        <div className="">
          <h1 className="font-medium mb-1">Client Acquisition</h1>
          <p className="text-sm text-neutral-500 mb-3">
            Overview of new clients gained over time, tracking trends and
            effectiveness of acquisition strategies.
          </p>
        </div>
        <div>
          <p className="mt-2 text-neutral-400 w-ful text-right text-sm">
            Updated 2m ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientMetrics;
