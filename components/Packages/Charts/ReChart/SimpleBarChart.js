import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const SimpleBarChart = ({ areaOption }) => {
  //Use Router
  const COLORS = ['#1d62ca', '#b9acf2', '#fff0bd'];

  return (
    <>
      <section
        className={`w-full h-full flex animate__animated animate__fadeIn scroller`}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={areaOption.width}
            height={areaOption.height}
            data={areaOption.data}
            margin={areaOption.margin}
          >
            <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 8}}  />
            <YAxis tickLine={false} tick={{ fontSize: 8 }} axisLine={false} />
            <Tooltip />
            <Bar dataKey="amt" fill="#8884d8" barSize={20} radius={[5, 5, 5, 5]} >
                {areaOption.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </section>
    </>
  );
};

export default SimpleBarChart;
