import { cn } from "@/lib/utils";

import { useState } from "react";

// charts
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import WidgetLayout from "./WidgetLayout";

// TYPES YO
type ActivityData = { month: string } & {
  scrabble?: number;
  chess?: number;
  coding?: number;
  cancelledClasses: number;
  completedClasses: number;
  totalHours: number;
};
type ActivityType = "scrabble" | "chess" | "coding";

const availableActivities = ["scrabble", "chess", "coding"];

const chartDataScrabble = [
  {
    month: "January",
    scrabble: 7,
    completedClasses: 5,
    cancelledClasses: 2,
    totalHours: 48,
  },
  {
    month: "February",
    scrabble: 8,
    completedClasses: 7,
    cancelledClasses: 1,
    totalHours: 70,
  },
  {
    month: "March",
    scrabble: 11,
    completedClasses: 11,
    cancelledClasses: 0,
    totalHours: 46,
  },
  {
    month: "April",
    scrabble: 2,
    completedClasses: 2,
    cancelledClasses: 0,
    totalHours: 21,
  },
  {
    month: "May",
    scrabble: 7,
    completedClasses: 6,
    cancelledClasses: 1,
    totalHours: 60,
  },
  {
    month: "June",
    scrabble: 4,
    completedClasses: 4,
    cancelledClasses: 0,
    totalHours: 42,
  },
  {
    month: "July",
    scrabble: 9,
    completedClasses: 8,
    cancelledClasses: 1,
    totalHours: 50,
  },
  {
    month: "August",
    scrabble: 6,
    completedClasses: 6,
    cancelledClasses: 0,
    totalHours: 55,
  },
  {
    month: "September",
    scrabble: 8,
    completedClasses: 7,
    cancelledClasses: 1,
    totalHours: 62,
  },
  {
    month: "October",
    scrabble: 10,
    completedClasses: 10,
    cancelledClasses: 0,
    totalHours: 68,
  },
  {
    month: "November",
    scrabble: 5,
    completedClasses: 4,
    cancelledClasses: 1,
    totalHours: 30,
  },
  {
    month: "December",
    scrabble: 7,
    completedClasses: 7,
    cancelledClasses: 0,
    totalHours: 40,
  },
];

const chartDataChess = [
  {
    month: "January",
    chess: 4,
    completedClasses: 3,
    cancelledClasses: 1,
    totalHours: 24,
  },
  {
    month: "February",
    chess: 6,
    completedClasses: 6,
    cancelledClasses: 0,
    totalHours: 40,
  },
  {
    month: "March",
    chess: 7,
    completedClasses: 7,
    cancelledClasses: 0,
    totalHours: 36,
  },
  {
    month: "April",
    chess: 10,
    completedClasses: 10,
    cancelledClasses: 0,
    totalHours: 30,
  },
  {
    month: "May",
    chess: 12,
    completedClasses: 12,
    cancelledClasses: 1,
    totalHours: 90,
  },
  {
    month: "June",
    chess: 5,
    completedClasses: 5,
    cancelledClasses: 0,
    totalHours: 42,
  },
  {
    month: "July",
    chess: 8,
    completedClasses: 7,
    cancelledClasses: 1,
    totalHours: 55,
  },
  {
    month: "August",
    chess: 9,
    completedClasses: 9,
    cancelledClasses: 0,
    totalHours: 60,
  },
  {
    month: "September",
    chess: 6,
    completedClasses: 6,
    cancelledClasses: 0,
    totalHours: 40,
  },
  {
    month: "October",
    chess: 11,
    completedClasses: 10,
    cancelledClasses: 1,
    totalHours: 80,
  },
  {
    month: "November",
    chess: 4,
    completedClasses: 4,
    cancelledClasses: 0,
    totalHours: 24,
  },
  {
    month: "December",
    chess: 6,
    completedClasses: 6,
    cancelledClasses: 0,
    totalHours: 35,
  },
];

const chartDataCoding = [
  {
    month: "January",
    coding: 14,
    completedClasses: 10,
    cancelledClasses: 4,
    totalHours: 87,
  },
  {
    month: "February",
    coding: 15,
    completedClasses: 14,
    cancelledClasses: 1,
    totalHours: 15,
  },
  {
    month: "March",
    coding: 3,
    completedClasses: 3,
    cancelledClasses: 0,
    totalHours: 180,
  },
  {
    month: "April",
    coding: 2,
    completedClasses: 2,
    cancelledClasses: 0,
    totalHours: 120,
  },
  {
    month: "May",
    coding: 7,
    completedClasses: 7,
    cancelledClasses: 0,
    totalHours: 117,
  },
  {
    month: "June",
    coding: 6,
    completedClasses: 5,
    cancelledClasses: 1,
    totalHours: 231,
  },
  {
    month: "July",
    coding: 5,
    completedClasses: 4,
    cancelledClasses: 1,
    totalHours: 200,
  },
  {
    month: "August",
    coding: 8,
    completedClasses: 7,
    cancelledClasses: 1,
    totalHours: 190,
  },
  {
    month: "September",
    coding: 7,
    completedClasses: 6,
    cancelledClasses: 1,
    totalHours: 220,
  },
  {
    month: "October",
    coding: 9,
    completedClasses: 8,
    cancelledClasses: 1,
    totalHours: 250,
  },
  {
    month: "November",
    coding: 4,
    completedClasses: 3,
    cancelledClasses: 1,
    totalHours: 150,
  },
  {
    month: "December",
    coding: 6,
    completedClasses: 5,
    cancelledClasses: 1,
    totalHours: 180,
  },
];

const chartConfig = {
  completedClasses: {
    label: "Completed classes" + " ",
  },
  cancelledClasses: {
    label: "Cancelled classes",
  },
} satisfies ChartConfig;
const comparisonChartConfig = {
  completedClassesScrabble: {
    label: "Scrabble",
  },
  completedClassesChess: {
    label: "Chess",
  },
  completedClassesCoding: {
    label: "Coding",
  },
} satisfies ChartConfig;

const data: Record<ActivityType, ActivityData[]> = {
  scrabble: chartDataScrabble,
  chess: chartDataChess,
  coding: chartDataCoding,
};

const ActivityChart = ({
  activity,
  fill,
}: {
  activity: string;
  fill: string;
}) => {
  return (
    <ChartContainer
      className="min-h-[350px] mt-10 max-w-full"
      config={chartConfig}
    >
      <BarChart accessibilityLayer data={data[activity as ActivityType]}>
        <CartesianGrid vertical={false} />
        <YAxis tickLine={false} axisLine={false} tickMargin={10} width={25} />
        <XAxis
          width={40}
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <ChartLegend content={<ChartLegendContent  />} />
        <Bar
          dataKey="completedClasses"
          stackId="a"
          fill={fill}
          radius={[4, 4, 4, 4]}
        />
        <Bar
          dataKey="cancelledClasses"
          stackId="a"
          fill="#e76e50"
          radius={[4, 4, 4, 4]}
        />
      </BarChart>
    </ChartContainer>
  );
};

const ComparisonChart = ({}) => {
  const combineChartData = (
    dataScrabble: ActivityData[],
    dataChess: ActivityData[],
    dataCoding: ActivityData[]
  ) => {
    const combinedData = [];

    for (let i = 0; i < dataScrabble.length; i++) {
      const month = dataScrabble[i].month;
      const completedClassesScrabble = dataScrabble[i].completedClasses;
      const completedClassesChess = dataChess[i].completedClasses;
      const completedClassesCoding = dataCoding[i].completedClasses;

      combinedData.push({
        month,
        completedClassesChess: completedClassesScrabble, // or replace with appropriate field if needed
        completedClassesCoding: completedClassesChess, // total completed classes for Chess and Coding
        completedClassesScrabble: completedClassesScrabble,
      });
    }

    return combinedData;
  };
  const allData = combineChartData(
    chartDataChess,
    chartDataCoding,
    chartDataCoding
  );
  console.log(allData);
  return (
    <ChartContainer
      className="min-h-[350px] mt-10 max-w-full"
      config={comparisonChartConfig}
    >
      <BarChart accessibilityLayer data={allData}>
        <CartesianGrid vertical={false} />
        <YAxis tickLine={false} axisLine={false} tickMargin={10} width={25} />

        <XAxis
          dataKey="month"
          tickLine={false}
          
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dashed" />}
        />
        <ChartLegend content={<ChartLegendContent  />} />

        <Bar dataKey="completedClassesScrabble" fill="#f4a462" radius={4} />
        <Bar dataKey="completedClassesChess" fill="#87A2FF" radius={4} />
        <Bar dataKey="completedClassesCoding" fill="#FFF100" radius={4} />
      </BarChart>
    </ChartContainer>
  );
};

const SessionsMetrics = () => {
  const [activeActivity, setActiveActivity] = useState<
    "scrabble" | "chess" | "coding"
  >("scrabble");
  const fill = {
    scrabble: "#f4a462",
    chess: "#87A2FF",
    coding: "#FFF100",
  };

  // TOTALS

  const totalSessions = data[activeActivity as ActivityType].reduce(
    (acc, curr) => acc + (curr[activeActivity] || 0),
    0
  );

  const completedClasses = data[activeActivity as ActivityType].reduce(
    (acc, curr) => acc + (curr["completedClasses"] || 0),
    0
  );

  const cancelledClasses = data[activeActivity as ActivityType].reduce(
    (acc, curr) => acc + (curr["cancelledClasses"] || 0),
    0
  );

  return (
    <WidgetLayout title="Training sessions" link="">
      <div className="p-4 flex flex-col gap-3">
        <div className="">
          <h1 className="widget_subheading">Total sessions</h1>
          <p className="text-sm text-neutral-500 mb-3">
            Cumulative number of monthly sessions held across all activities
          </p>
          <div
            className="w-full lg:w-72 border h-9 grid rounded grid-cols-3 p-1"
            style={{
              gridTemplateColumns: `repeat(${availableActivities.length}, minmax(0, 1fr))`,
            }}
          >
            {availableActivities.map((activity, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setActiveActivity(activity as ActivityType)}
                  className={cn(
                    "text-sm rounded",
                    activeActivity === activity
                      ? "bg-neutral-100 lg:bg-neutral-200/70 text-neutral-800 font-medium"
                      : "text-neutral-500"
                  )}
                >
                  {activity}
                </button>
              );
            })}
          </div>
        </div>
        <div>
          <ActivityChart
            fill={fill[activeActivity]}
            activity={activeActivity}
          />
          <p className="mt-2 text-neutral-400 w-ful text-right text-sm">
            Updated 2m ago
          </p>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-1">
        <div className="bg-neutral-50 lg:bg-neutral-100 text-sm w-full p-3 rounded-lg flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div
              className="size-2 rounded-full"
              style={{ backgroundColor: fill[activeActivity] }}
            />
            <p className="font-medium">Total sessions</p>
          </div>
          <p className="text-neutral-700">
            {totalSessions.toLocaleString("en-Us")}
          </p>
        </div>
        <div className=" text-sm w-full p-3 rounded-lg flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-green-500" />
            <p className="font-medium">Total hours</p>
          </div>
          <p className="text-neutral-700">
            {completedClasses.toLocaleString()}
          </p>
        </div>
        <div className="bg-neutral-50 lg:bg-neutral-100 text-sm w-full p-3 rounded-lg flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-red-500" />
            <p className="font-medium">Cancelled sessions</p>
          </div>
          <p className="text-neutral-700">
            {cancelledClasses.toLocaleString("en-Us")}
          </p>
        </div>
      </div>

      <hr />
      <div className="p-4">
        {" "}
        <h1 className="widget_subheading">Sessions comparison</h1>
        <p className="text-sm text-neutral-500 mb-3">
          Comparison of <b>completed classes</b> for all activities
        </p>
        <div className="w-full">
          <ComparisonChart />
          <p className="mt-2 text-neutral-400 w-ful text-right text-sm">
            Updated 2m ago
          </p>
        </div>
      </div>
    </WidgetLayout>
  );
};

export default SessionsMetrics;
