import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";
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
const clientAcquisitionConfig = {
  coding: {
    label: "coding",
    color: "#FFF100",
  },
  chess: {
    label: "chess",
    color: "#00ac47",
  },
  scrabble: {
    label: "scrabble",
    color: "#f4a462",
  },
} satisfies ChartConfig;

const clientRetentionConfig = {
  coding: {
    label: "coding",
    color: "#FFF100",
  },
  chess: {
    label: "chess",
    color: "#00ac47",
  },
  scrabble: {
    label: "scrabble",
    color: "#f4a462",
  },
} satisfies ChartConfig;

// * data yo
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
const clientRetentionData = [
  {
    month: "January",
    chess: 12, // Number of clients retained
    coding: 1,
    scrabble: 8,
  },
  {
    month: "February",
    chess: 15,
    coding: 22,
    scrabble: 9,
  },
  {
    month: "March",
    chess: 16,
    coding: 20,
    scrabble: 11,
  },
  {
    month: "April",
    chess: 22,
    coding: 26,
    scrabble: 14,
  },
  {
    month: "May",
    chess: 25,
    coding: 30,
    scrabble: 16,
  },
  {
    month: "June",
    chess: 27,
    coding: 34,
    scrabble: 18,
  },
];

// * components
const ClientAcquisitionChart = () => {
  return (
    <ChartContainer
      className="min-h-[350px] max-w-full mt-5"
      config={clientAcquisitionConfig}
    >
      <LineChart
        accessibilityLayer
        data={clientAcquisitionData}
        margin={{
          top: 20,
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <YAxis tickLine={false} axisLine={false} tickMargin={20} width={30} />

        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Line
          dataKey="chess"
          type="natural"
          stroke="#00ac47"
          strokeWidth={2}
          dot={{
            fill: "#00ac47",
          }}
          activeDot={{
            r: 6,
          }}
        />
        <Line
          dataKey="scrabble"
          type="natural"
          stroke="#f4a462"
          strokeWidth={2}
          dot={{
            fill: "#f4a462",
          }}
          activeDot={{
            r: 6,
          }}
        />
        <Line
          dataKey="coding"
          type="natural"
          stroke="#FFF100"
          strokeWidth={2}
          dot={{
            fill: "#FFF100",
          }}
          activeDot={{
            r: 6,
          }}
        />
      </LineChart>
    </ChartContainer>
  );
};

const ClientRetentionChart = () => {
  return (
    <ChartContainer
      className="min-h-[350px] max-w-full mt-5"
      config={clientRetentionConfig}
    >
      <LineChart
        accessibilityLayer
        data={clientRetentionData}
        margin={{
          top: 20,
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <YAxis tickLine={false} axisLine={false} tickMargin={20} width={30} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Line
          dataKey="chess"
          type="natural"
          stroke="#00ac47"
          strokeWidth={2}
          dot={{
            fill: "#00ac47",
          }}
          activeDot={{
            r: 6,
          }}
        />
        <Line
          dataKey="scrabble"
          type="natural"
          stroke="#f4a462"
          strokeWidth={2}
          dot={{
            fill: "#f4a462",
          }}
          activeDot={{
            r: 6,
          }}
        />
        <Line
          dataKey="coding"
          type="natural"
          stroke="#FFF100"
          strokeWidth={2}
          dot={{
            fill: "#FFF100",
          }}
          activeDot={{
            r: 6,
          }}
        />
      </LineChart>
    </ChartContainer>
  );
};

const ClientMetrics = () => {
  return (
    <div className="w-full border rounded-md bg-white">
      <div className="p-4 border-b flex items-center justify-between ">
        <h1 className=" font-semibold ">Clients</h1>
        <ChevronRight size={14} strokeWidth={4} />
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div className="">
          <h1 className="font-medium mb-1">Client Acquisition</h1>
          <p className="text-sm text-neutral-500 mb-3">
            Overview of new clients gained over time, tracking trends and
            effectiveness of acquisition strategies.
          </p>
        </div>
        <div>
          <ClientAcquisitionChart />
          <p className="mt-2 text-neutral-400 w-ful text-right text-sm">
            Updated 2m ago
          </p>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3 border-t">
        <div className="">
          <h1 className="font-medium mb-1">Client Retention</h1>
          <p className="text-sm text-neutral-500 mb-3">
            Tracks client engagement over time, highlighting retention trends.
          </p>
        </div>
        <div>
          <ClientRetentionChart />
          <p className="mt-2 text-neutral-400 w-ful text-right text-sm">
            Updated 2m ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientMetrics;
