import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { PRODUCT_COLORS } from "@/app/utils/firebase/constants";
import WidgetLayout from "./WidgetLayout";

const products = ["books", "bands", "boards", "merch"];

// configs
const totalSalesChartConfig = {
  books: {
    label: "Books",
    color: PRODUCT_COLORS.books,
  },
  bands: {
    label: "Bands",
    color: PRODUCT_COLORS.bands,
  },
  boards: {
    label: "Boards",
    color: PRODUCT_COLORS.boards,
  },
  merch: {
    label: "Merch",
    color: PRODUCT_COLORS.merch,
  },
} satisfies ChartConfig;
const totalRevenueChartConfig = {
  booksRevenue: {
    label: "Books",
    color: PRODUCT_COLORS.books,
  },
  bandsRevenue: {
    label: "Bands",
    color: PRODUCT_COLORS.bands,
  },
  boardsRevenue: {
    label: "Boards",
    color: PRODUCT_COLORS.boards,
  },
  merchRevenue: {
    label: "Merch",
    color: PRODUCT_COLORS.merch,
  },
} satisfies ChartConfig;
const totalGPMarginChartConfig = {
  booksGPMargin: {
    label: "Books",
    color: PRODUCT_COLORS.books,
  },
  bandsGPMargin: {
    label: "Bands",
    color: PRODUCT_COLORS.bands,
  },
  boardsGPMargin: {
    label: "Boards",
    color: PRODUCT_COLORS.boards,
  },
  merchGPMargin: {
    label: "Merch",
    color: PRODUCT_COLORS.merch,
  },
} satisfies ChartConfig;
const totalGProfitChartConfig = {
  booksGProfit: {
    label: "Books",
    color: PRODUCT_COLORS.books,
  },
  bandsGProfit: {
    label: "Bands",
    color: PRODUCT_COLORS.bands,
  },
  boardsGProfit: {
    label: "Boards",
    color: PRODUCT_COLORS.boards,
  },
  merchGProfit: {
    label: "Merch",
    color: PRODUCT_COLORS.merch,
  },
} satisfies ChartConfig;

const salesData = [
  {
    month: "January",
    books: 7,
    bands: 5,
    merch: 2,
    boards: 3,
  },
  {
    month: "February",
    books: 8,
    bands: 7,
    merch: 1,
    boards: 2,
  },
  {
    month: "March",
    books: 11,
    bands: 11,
    merch: 0,
    boards: 4,
  },
  {
    month: "April",
    books: 2,
    bands: 2,
    merch: 0,
    boards: 1,
  },
  {
    month: "May",
    books: 7,
    bands: 6,
    merch: 5,
    boards: 5,
  },
  {
    month: "June",
    books: 40,
    bands: 4,
    merch: 0,
    boards: 5,
  },
  {
    month: "July",
    books: 24,
    bands: 41,
    merch: 10,
    boards: 5,
  },
];

// BUYING PRICES

const BPBOOKPRICE = 250;
const BPBANDPRICE = 180;
const BPBOARDPRICE = 700;
const BPMERCHPRICE = 450;

// SELLING PRICES

const BOOKPRICE = 300;
const BANDPRICE = 200;
const BOARDPRICE = 1000;
const MERCHPRICE = 500;

// * HELPER FUNCTIONS

const getRevenue = (arr: any) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    const bookPrice = arr[i].books * BOOKPRICE;
    const bands = arr[i].bands * BANDPRICE;
    const boardsPrice = arr[i].boards * BOARDPRICE;
    const merchPrice = arr[i].merch * MERCHPRICE;

    result.push({
      month: arr[i].month,
      booksRevenue: bookPrice,
      bandsRevenue: bands,
      boardsRevenue: boardsPrice,
      merchRevenue: merchPrice,
    });
  }

  return result;
};

const getGPMargin = (arr: any) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const booksMargin =
      arr[i].booksRevenue === 0
        ? 0
        : (
            ((arr[i].booksRevenue - salesData[i].books * BPBOOKPRICE) /
              arr[i].booksRevenue) *
            100
          ).toFixed(1);
    const bandsMargin =
      arr[i].bandsRevenue === 0
        ? 0
        : (
            ((arr[i].bandsRevenue - salesData[i].bands * BPBANDPRICE) /
              arr[i].bandsRevenue) *
            100
          ).toFixed(1);
    const boardsMargin =
      arr[i].boardsRevenue === 0
        ? 0
        : (
            ((arr[i].boardsRevenue - salesData[i].boards * BPBOARDPRICE) /
              arr[i].boardsRevenue) *
            100
          ).toFixed(1);
    const merchMargin =
      arr[i].merchRevenue === 0
        ? 0
        : (
            ((arr[i].merchRevenue - salesData[i].merch * BPMERCHPRICE) /
              arr[i].merchRevenue) *
            100
          ).toFixed(1);

    result.push({
      month: arr[i].month,
      booksGPMargin: booksMargin || 0,
      bandsGPMargin: bandsMargin || 0,
      boardsGPMargin: boardsMargin || 0,
      merchGPMargin: merchMargin || 0,
    });
  }

  return result;
};

const getGProfit = (arr: any) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const booksGProfit =
      arr[i].booksRevenue === 0
        ? 0
        : arr[i].booksRevenue - salesData[i].books * BPBOOKPRICE;
    const bandsGProfit =
      arr[i].bandsRevenue === 0
        ? 0
        : arr[i].bandsRevenue - salesData[i].bands * BPBANDPRICE;
    const boardsGProfit =
      arr[i].boardsRevenue === 0
        ? 0
        : arr[i].boardsRevenue - salesData[i].boards * BPBOARDPRICE;
    const merchGProfit =
      arr[i].merchRevenue === 0
        ? 0
        : arr[i].merchRevenue - salesData[i].merch * BPMERCHPRICE;

    result.push({
      month: arr[i].month,
      booksGProfit: booksGProfit || 0,
      bandsGProfit: bandsGProfit || 0,
      boardsGProfit: boardsGProfit || 0,
      merchGProfit: merchGProfit || 0,
    });
  }

  return result;
};

// * COMPONENTS

const TotalSalesChart = () => {
  return (
    <ChartContainer
      className="min-h-[350px] lg:h-[200px] w-full  max-w-full mt-5"
      config={totalSalesChartConfig}
    >
      <BarChart accessibilityLayer data={salesData}>
        <CartesianGrid vertical={false} />
        <YAxis tickLine={false} axisLine={false} tickMargin={10} width={25} />

        <XAxis
          width={20}
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar
          barSize={50}
          dataKey="bands"
          stackId="a"
          fill={PRODUCT_COLORS.bands}
        />
        <Bar
          barSize={50}
          dataKey="merch"
          stackId="a"
          fill={PRODUCT_COLORS.merch}
        />
        <Bar
          barSize={50}
          dataKey="books"
          stackId="a"
          fill={PRODUCT_COLORS.books}
        />
        <Bar
          barSize={50}
          dataKey="boards"
          stackId="a"
          fill={PRODUCT_COLORS.boards}
        />
      </BarChart>
    </ChartContainer>
  );
};

const TotalRevenueChart = () => {
  const RevenueData = getRevenue(salesData);
  return (
    <ChartContainer
      className="min-h-[350px] mt-5 max-w-full"
      config={totalRevenueChartConfig}
    >
      <BarChart accessibilityLayer data={RevenueData}>
        <CartesianGrid vertical={false} />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={1}
          width={40}
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
        <ChartLegend content={<ChartLegendContent />} />
        <Bar
          dataKey="bandsRevenue"
          stackId="a"
          fill={PRODUCT_COLORS.bands}
          barSize={50}
        />
        <Bar
          dataKey="merchRevenue"
          stackId="a"
          fill={PRODUCT_COLORS.merch}
          barSize={50}
        />
        <Bar
          dataKey="booksRevenue"
          stackId="a"
          fill={PRODUCT_COLORS.books}
          barSize={50}
        />
        <Bar
          dataKey="boardsRevenue"
          stackId="a"
          fill={PRODUCT_COLORS.boards}
          barSize={50}
        />
      </BarChart>
    </ChartContainer>
  );
};

const GPMarginChart = () => {
  const revenueData = getRevenue(salesData);

  const GPMarginData = getGPMargin(revenueData);
  const GProfit = getGProfit(revenueData);

  const [activeMetric, setActiveMetric] = useState<"gpMargin" | "gpProfit">(
    "gpProfit"
  );

  const data = activeMetric === "gpMargin" ? GPMarginData : GProfit;
  const config: ChartConfig =
    activeMetric === "gpMargin"
      ? totalGPMarginChartConfig
      : totalGProfitChartConfig;

  return (
    <div className="">
      <div className="w-32 grid grid-cols-2 p-1 h-10 border rounded mt-2">
        <button
          onClick={() => setActiveMetric("gpMargin")}
          className={cn(
            "w-full h-full grid place-items-center text-sm",
            activeMetric === "gpMargin"
              ? "bg-neutral-100 text-neutral-800 font-medium"
              : "text-neutral-500"
          )}
        >
          margin
        </button>
        <button
          onClick={() => setActiveMetric("gpProfit")}
          className={cn(
            "w-full h-full grid place-items-center text-sm",
            activeMetric === "gpProfit"
              ? "bg-neutral-100 text-neutral-800 font-medium"
              : "text-neutral-500"
          )}
        >
          profit
        </button>
      </div>
      <ChartContainer className="min-h-[350px] max-w-full mt-5" config={config}>
        <BarChart accessibilityLayer data={data}>
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
          <ChartTooltip
            content={
              <ChartTooltipContent
                hideLabel
                formatter={(value, name, item, index) => (
                  <>
                    <div
                      className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-[--color-bg]"
                      style={
                        {
                          "--color-bg": `var(--color-${name})`,
                        } as React.CSSProperties
                      }
                    />
                    {config[name as keyof typeof config]?.label || name}
                    <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                      {value.toLocaleString("en-US")}
                      <span className="font-normal text-muted-foreground">
                        {activeMetric === "gpMargin" ? " %" : "Ksh"}
                      </span>
                    </div>
                  </>
                )}
              />
            }
          />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar
            dataKey={
              activeMetric === "gpProfit" ? "bandsGProfit" : "bandsGPMargin"
            }
            stackId="a"
            fill={PRODUCT_COLORS.bands}
            barSize={50}
          />
          <Bar
            dataKey={
              activeMetric === "gpProfit" ? "merchGProfit" : "merchGPMargin"
            }
            stackId="a"
            fill={PRODUCT_COLORS.merch}
            barSize={50}
          />
          <Bar
            dataKey={
              activeMetric === "gpProfit" ? "booksGProfit" : "booksGPMargin"
            }
            stackId="a"
            fill={PRODUCT_COLORS.books}
            barSize={50}
          />
          <Bar
            dataKey={
              activeMetric === "gpProfit" ? "boardsGProfit" : "boardsGPMargin"
            }
            stackId="a"
            fill={PRODUCT_COLORS.boards}
            barSize={50}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

const SalesMetrics = () => {
  return (
    <WidgetLayout title="Sales" link="">
      <div className="p-4 flex flex-col gap-3">
        <div className="">
          <h1 className=" font-medium mb-1">Number of sales</h1>
          <p className="text-sm text-neutral-500 mb-3">
            Cumulative number of sales from all products
          </p>
        </div>
        <div>
          <TotalSalesChart />
          <p className="mt-2 text-neutral-400 w-ful text-right text-sm">
            Updated 2m ago
          </p>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3 border-t">
        <div className="">
          <h1 className=" font-medium mb-1">Total Revenue</h1>
          <p className="text-sm text-neutral-500 mb-3">
            Revenue comparison of sales from all products
          </p>
        </div>
        <div>
          <TotalRevenueChart />
          <p className="mt-2 text-neutral-400 w-ful text-right text-sm">
            Updated 2m ago
          </p>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3 border-t">
        <div className="">
          <h1 className=" font-medium mb-1">Gross profit</h1>
          <p className="text-sm text-neutral-500 mb-3">
            Gross profitcomparison of sales from all products
          </p>
        </div>
        <div>
          <GPMarginChart />
          <p className="mt-2 text-neutral-400 w-ful text-right text-sm">
            Updated 2m ago
          </p>
        </div>
      </div>
    </WidgetLayout>
  );
};

export default SalesMetrics;
