import { ArrowDown, ArrowUp, ChevronRight } from "lucide-react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [{ scrabble: 100, chess: 400 }];

const chartConfig = {
  scrabble: {
    label: "Scrabble",
    color: "red",
  },
  chess: {
    label: "Chess",
    color: "black",
  },
} satisfies ChartConfig;

const RadialChart = () => {
  const totalPlayers = chartData[0].scrabble + chartData[0].chess;

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
          fill="red"
          className="stroke-white stroke-2"
        />
        <RadialBar
          dataKey="chess"
          fill="black"
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
    <div className="w-full border rounded-md bg-white">
      <div className="p-4 border-b flex items-center justify-between ">
        <h1 className=" font-semibold ">Player segmentation</h1>
        <ChevronRight size={14} strokeWidth={4} />
      </div>
      <div className="w-full py-4 flex flex-col ">
        <div className="px-4">
          <p className="tracking-tight font-semibold text-neutral-700 ">Total Players</p>
          <small className="text-neutral-400 font-semibold">
            January - June 2024
          </small>
        </div>
        <div className="w-full ">
          <RadialChart />
        </div>
        <div className="w-full px-4 flex flex-col gap-1">
          <div className="flex items-center p-3 rounded-lg bg-neutral-100 justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1.5 rounded-full h-5 bg-neutral-800" />
              <p className="font-bold tracking-tight">{chartData[0].chess}</p>
              <div className="flex items-center text-green-500">
                <ArrowUp strokeWidth={4} size={10} />
                <p className="text-sm font-bold">30%</p>
              </div>
            </div>
            <p className="text-sm font-semibold">Chess players</p>
          </div>
          <div className="flex items-center p-3 rounded-lg bg-red-50 justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1.5 rounded-full h-5 bg-red-400" />

              <p className="font-bold tracking-tight">
                {chartData[0].scrabble}
              </p>
              <div className="flex items-center text-red-500">
                <ArrowDown strokeWidth={4} size={10} />
                <p className="text-sm font-bold">10%</p>
              </div>
            </div>{" "}
            <p className="text-sm font-semibold">Scrabble players</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameParticipation;
