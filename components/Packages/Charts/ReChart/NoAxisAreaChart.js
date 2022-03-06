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

const NoAxisAreaChart = ({ areaOption }) => {
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
            <XAxis
              hide={true}
              dataKey="date"
              tick={{ fontSize: 8 }}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              wrapperStyle={{ fontSize: "10px" }}
              contentStyle={{ background: "none", height: "10px", border: 'none' }}
              labelStyle={{ color: "gray", marginTop: "-15px" }}
              itemStyle={{ color: "black", marginTop: "-8px" }}
            />
            <Area
              type="monotone"
              dataKey="amt"
              stroke="#b9acf2"
              strokeWidth={2}
              fillOpacity={1}
              fill="#b9acf2"
            />
          </AreaChart>
        </ResponsiveContainer>
      </section>
    </>
  );
};

export default NoAxisAreaChart;
