import { ChevronRight } from "lucide-react";
import {
  Bar,
  BarChart,
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
import WidgetLayout from "./WidgetLayout";
import { EXPENSE_COLORS } from "@/app/utils/firebase/constants";

// * data
const expensesData = [
  {
    month: "January",
    transport: 1200,
    salaries: 8000,
    materials: 1500,
    marketing: 1000,
    activities: 2000,
    entertainment: 500,
    miscellaneous: 300,
  },
  {
    month: "February",
    transport: 1100,
    salaries: 8200,
    materials: 1400,
    marketing: 1200,
    activities: 2500,
    entertainment: 600,
    miscellaneous: 350,
  },
  {
    month: "March",
    transport: 1300,
    salaries: 8500,
    materials: 1700,
    marketing: 1300,
    activities: 2300,
    entertainment: 550,
    miscellaneous: 400,
  },
];

// * config

const totalExpencesChartConfig = {
  salaries: {
    label: "Salaries",
    color: EXPENSE_COLORS.salaries,
  },
  materials: {
    label: "materials",
    color: EXPENSE_COLORS.materials,
  },
  marketing: {
    label: "marketing",
    color: EXPENSE_COLORS.marketing,
  },
  activities: {
    label: "activities",
    color: EXPENSE_COLORS.activities,
  },
  transport: {
    label: "transport",
    color: EXPENSE_COLORS.transport,
  },
  miscellaneous: {
    label: "miscellaneous",
    color: EXPENSE_COLORS.miscellaneous,
  },
} satisfies ChartConfig;

const expenseGrowthChartConfig = {
  totalExpense: {
    label: "Total expenses",
    color: "#00ac47",
  },
} satisfies ChartConfig;

// * helper functions
const getTotalExpenses = (data: typeof expensesData) => {
  let result: { month: string; totalExpense: number }[] = [];

  for (let i = 0; i < data.length; i++) {
    const totalExpense =
      data[i].activities +
      data[i].marketing +
      data[i].salaries +
      data[i].transport +
      data[i].materials +
      data[i].miscellaneous;

    result.push({
      month: data[i].month,
      totalExpense,
    });
  }

  return result;
};

// * components
const TotalExpencesChart = () => {
  return (
    <ChartContainer
      className="min-h-[400px] max-w-full"
      config={totalExpencesChartConfig}
    >
      <BarChart accessibilityLayer data={expensesData}>
        <CartesianGrid vertical={false} />
        <CartesianGrid vertical={false} />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={1}
          width={35}
          className="min-w-fit"
        />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <ChartLegend
          className="max-w-fit mx-auto flex flex-wrap"
          content={<ChartLegendContent />}
        />
        <Bar
          dataKey="salaries"
          stackId="a"
          fill={EXPENSE_COLORS.salaries}
          radius={[4, 4, 4, 4]}
        />
        <Bar
          dataKey="materials"
          stackId="b"
          fill={EXPENSE_COLORS.materials}
          radius={[4, 4, 4, 4]}
        />
        <Bar
          dataKey="marketing"
          stackId="c"
          fill={EXPENSE_COLORS.marketing}
          radius={[4, 4, 4, 4]}
        />
        <Bar
          dataKey="activities"
          stackId="d"
          fill={EXPENSE_COLORS.activities}
          radius={[4, 4, 4, 4]}
        />
        <Bar
          dataKey="miscellaneous"
          stackId="e"
          fill={EXPENSE_COLORS.miscellaneous}
          radius={[4, 4, 4, 4]}
        />{" "}
        <Bar
          dataKey="transport"
          stackId="f"
          fill={EXPENSE_COLORS.transport}
          radius={[4, 4, 4, 4]}
        />
      </BarChart>
    </ChartContainer>
  );
};

const ExpenseGrowthChart = () => {
  const data = getTotalExpenses(expensesData);
  return (
    <ChartContainer
      className="min-h-[250px] max-w-full"
      config={expenseGrowthChartConfig}
    >
      <LineChart
        accessibilityLayer
        data={data}
        margin={{
          top: 20,
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
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
          dataKey="totalExpense"
          type="natural"
          stroke="#00ac47"
          strokeWidth={2}
          dot={{
            fill: "#00ac47",
          }}
          activeDot={{
            r: 6,
          }}
        >
          <LabelList
            position="top"
            offset={12}
            className="fill-foreground"
            fontSize={12}
          />
        </Line>
      </LineChart>
    </ChartContainer>
  );
};

const OperatingExpenses = () => {
  return (
    <WidgetLayout title="Operating expenses" link="">
      <div className="p-4 flex flex-col gap-3">
        <div className="">
          <h1 className="font-medium mb-1">Total expences</h1>
          <p className="text-sm text-neutral-500 mb-3">
            Overview of new clients gained over time, tracking trends and
            effectiveness of acquisition strategies.
          </p>
        </div>
        <div>
          {/* chart */}
          <TotalExpencesChart />
          <p className="mt-2 text-neutral-400 w-ful text-right text-sm">
            Updated 2m ago
          </p>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3 border-t">
        <div className="">
          <h1 className="font-medium mb-1">Expense Growth</h1>
          <p className="text-sm text-neutral-500 mb-3">
            Track monthly expense increases.
          </p>
        </div>
        <div>
          {/* chart */}
          <ExpenseGrowthChart />
          <p className="mt-2 text-neutral-400 w-ful text-right text-sm">
            Updated 2m ago
          </p>
        </div>
      </div>
    </WidgetLayout>
  );
};

export default OperatingExpenses;
