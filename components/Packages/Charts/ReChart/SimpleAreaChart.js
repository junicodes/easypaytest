import styles from "../styles/Chart.module.css";
import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SimpleAreaChart = ({ areaOption }) => {
  //Use Router
  return (
    <>
      <section
        className={`w-full h-full flex animate__animated animate__fadeIn scroller`}
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={areaOption.width}
            height={areaOption.height}
            data={areaOption.data}
            margin={areaOption.margin}
          >
            <defs>
              <linearGradient id="simpleColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6694da" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.2} />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} stroke="#DDD" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 8 }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              dataKey="amt"
              tickLine={false}
              tick={{ fontSize: 8 }}
              axisLine={false}
            />
            <Tooltip
              wrapperStyle={{ fontSize: "8px" }}
              contentStyle={{ background: "#154ea5", height: "10px", borderRadius: '5px' }}
              labelStyle={{ display: "none" }}
              itemStyle={{ color: "white", marginTop: "-10px" }}
            />
            <Area
              type="monotone"
              dataKey="amt"
              stroke="#6694da"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#simpleColor)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </section>
    </>
  );
};

export default SimpleAreaChart;
