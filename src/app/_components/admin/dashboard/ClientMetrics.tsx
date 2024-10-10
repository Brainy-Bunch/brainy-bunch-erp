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
import WidgetLayout from "./WidgetLayout";
import { ACTIVITY_COLORS } from "@/app/utils/firebase/constants";

// * configs yo
const clientAcquisitionConfig = {
  coding: {
    label: "coding",
    color: ACTIVITY_COLORS.coding,
  },
  chess: {
    label: "chess",
    color: ACTIVITY_COLORS.chess,
  },
  scrabble: {
    label: "scrabble",
    color: ACTIVITY_COLORS.scrabble,
  },
} satisfies ChartConfig;

const clientRetentionConfig = {
  coding: {
    label: "coding",
    color: ACTIVITY_COLORS.coding,
  },
  chess: {
    label: "chess",
    color: ACTIVITY_COLORS.chess,
  },
  scrabble: {
    label: "scrabble",
    color: ACTIVITY_COLORS.scrabble,
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
        <ChartLegend content={<ChartLegendContent  />} />
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
          stroke={ACTIVITY_COLORS.chess}
          strokeWidth={2}
          dot={{
            fill: ACTIVITY_COLORS.chess,
          }}
          activeDot={{
            r: 6,
          }}
        />
        <Line
          dataKey="scrabble"
          type="natural"
          stroke={ACTIVITY_COLORS.scrabble}
          strokeWidth={2}
          dot={{
            fill: ACTIVITY_COLORS.scrabble,
          }}
          activeDot={{
            r: 6,
          }}
        />
        <Line
          dataKey="coding"
          type="natural"
          stroke={ACTIVITY_COLORS.coding}
          strokeWidth={2}
          dot={{
            fill: ACTIVITY_COLORS.coding,
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
    <WidgetLayout title="Clients" link="">
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
    </WidgetLayout>
  );
};

export default ClientMetrics;
