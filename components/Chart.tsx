"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

function Chart({ active, inactive }: { active: number; inactive: number }) {
  const chartData = [
    { category: "Active Members", count: active, fill: "#24AE7C" },
    { category: "Inactive Members", count: inactive, fill: "#FF4F4E" },
  ];

  const chartConfig = {
    count: {
      label: "Total Members",
    },
    "Active Members": {
      label: "Active Members ",
      color: "#0D2A1F",
    },
    "Inactive Members": {
      label: "Inactive Members",
      color: "#3E1716",
    },
  };

  const totalMembers = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.count, 0);
  }, []);

  return (
    <div className="">
      <ChartContainer
        config={chartConfig}
        className="w-full max-w-[200px] aspect-square"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                className="bg-dark-200 text-light-200 text-l"
                hideLabel
              />
            }
          />
          <Pie
            data={chartData}
            dataKey="count"
            nameKey="category"
            innerRadius={60}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        style={{
                          fill: "#E8E9E9",
                          fontSize: "22px",
                          fontWeight: "bold",
                        }}
                      >
                        {totalMembers.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        style={{
                          fill: "#E8E9E9",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        MEMBERS
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
    </div>
  );
}

export default Chart;
