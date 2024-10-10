import { ArrowDown, ArrowUp, ChevronRight } from "lucide-react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import WidgetLayout from "./WidgetLayout";
import { ACTIVITY_COLORS } from "@/app/utils/firebase/constants";

const chartData = [{ scrabble: 100, chess: 400, coding: 340 }];

const chartConfig = {
  scrabble: {
    label: "Scrabble",
    color: ACTIVITY_COLORS.scrabble,
  },
  chess: {
    label: "Chess",
    color: ACTIVITY_COLORS.chess,
  },
  coding: {
    label: "Coding",
    color: ACTIVITY_COLORS.coding,
  },
} satisfies ChartConfig;

const RadialChart = () => {
  const totalPlayers =
    chartData[0].scrabble + chartData[0].chess + chartData[0].coding;

  return (
    <ChartContainer
      config={chartConfig}
      className=" aspect- w-full  min-h-[300px] max-w-[600px] "
    >
      <RadialBarChart
        data={chartData}
        endAngle={360}
        innerRadius={100}
        outerRadius={150}
      >
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) - 0}
                      className="fill-foreground text-3xl font-bold"
                    >
                      {totalPlayers.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 16}
                      className="fill-muted-foreground !text-neutral-300 font-semibold"
                    >
                      Total players
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
        <RadialBar
          dataKey="scrabble"
          stackId="a"
          cornerRadius={7}
          fill={ACTIVITY_COLORS.scrabble}
          className="stroke-white stroke-2"
        />
        <RadialBar
          dataKey="chess"
          fill={ACTIVITY_COLORS.chess}
          stackId="a"
          cornerRadius={7}
          className="stroke-white stroke-2"
        />
        <RadialBar
          dataKey="coding"
          fill={ACTIVITY_COLORS.coding}
          stackId="a"
          cornerRadius={7}
          className="stroke-white stroke-2"
        />
      </RadialBarChart>
    </ChartContainer>
  );
};

const GameParticipation = () => {
  return (
    <WidgetLayout title="Activity Segmentation" link="">
      <div className="w-full py-4 flex flex-col ">
        <div className="px-4">
          <p className="widget_subheading">Total Players</p>
          <small className="text-neutral-400 font-semibold">
            January - June 2024
          </small>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-4">
          <div className="w-full lg:col-span-2">
            <RadialChart />
          </div>
          <div className="w-full px-4 lg:pl-0 lg:col-span-2 flex flex-col lg:justify-center gap-1">
            <div className="bg-neutral-50 lg:bg-neutral-100 text-sm w-full p-3 rounded-lg flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div
                  className="size-2 rounded-full"
                  style={{ backgroundColor: ACTIVITY_COLORS.chess }}
                />
                <p className="font-medium">Chess </p>
              </div>
              <p className="text-neutral-700">{chartData[0].chess}</p>
            </div>
            <div className="text-sm w-full p-3 rounded-lg flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div
                  className="size-2 rounded-full"
                  style={{ backgroundColor: ACTIVITY_COLORS.scrabble }}
                />
                <p className="font-medium">Scrabble </p>
              </div>
              <p className="text-neutral-700">{chartData[0].scrabble}</p>
            </div>
            <div className="bg-neutral-50 lg:bg-neutral-100 text-sm w-full p-3 rounded-lg flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div
                  className="size-2 rounded-full"
                  style={{ backgroundColor: ACTIVITY_COLORS.coding }}
                />
                <p className="font-medium">Coding</p>
              </div>
              <p className="text-neutral-700">{chartData[0].coding}</p>
            </div>
          </div>
        </div>
      </div>
    </WidgetLayout>
  );
};

export default GameParticipation;
