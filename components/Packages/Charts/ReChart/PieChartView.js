import styles from "../styles/Chart.module.css";
import React, { useState } from "react";
import { PieChart, Pie, Cell, Sector, ResponsiveContainer } from 'recharts';


const renderActiveShape = (props) => {

  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Amt: $${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const PieChartPreview = ({ areaOption }) => {
  //Use Router
  const COLORS = ['#1d62ca', '#b9acf2', '#fff0bd'];
  const [activeIndex, setActiveIndex] = useState(0);


  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <section
        className={` w-full h-full first-letter:animate__animated animate__fadeIn scroller`}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart    
            width={areaOption.width}
            height={areaOption.height}
            margin={areaOption.margin}
            >
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={areaOption.data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={75}
              fill="#1d62ca"
              dataKey="value"
              label={true}
              legendType="star"
              paddingAngle={5}
              onMouseEnter={onPieEnter}
            >
             {areaOption.data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </section>
    </>
  );
};

export default PieChartPreview;



















// import styles from "../styles/Chart.module.css";
// import React, { useRef, useState, useEffect } from "react";
// import dynamic from "next/dynamic";

// const ApexChart = dynamic(
//   () => {
//     return import("react-apexcharts");
//   },
//   { ssr: false }
// );

// const PieChart = ({ data }) => {
//   //State
//   const [parameter, setParameter] = useState({
//     series: [3745.49, 4751.59, 4547.12],
//     options: {
//       chart: {
//         width: 380,
//         type: "donut",
//       },
//       plotOptions: {
//         pie: {
//           startAngle: -90,
//           endAngle: 270,
//         },
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       fill: {
//         type: "gradient",
//       },
//       legend: {
//         show: true,
//         position: "left",
//         offsetY: 0,
//         fontSize: "10px",
//         labels: {
//             colors: undefined,
//             useSeriesColors: false
//         },
//         formatter: function (val, opts) {
//             console.log(val, opts)
//           const names = ['Tap','Ya','Za']
//           return `${names[opts.seriesIndex]}` + "<p class='ml-5'>$ " + opts.w.globals.series[opts.seriesIndex] + "</p>";
//         },
//       },
//       title: {
//         text: "",
//       },
//     },
//   });

//   //Use Router
//   return (
//     <>
//       <section
//         className={`w-full flex animate__animated animate__fadeIn scroller`}
//       >
//         <div className="w-full">
//             <ApexChart
//               options={parameter.options}
//               series={parameter.series}
//               type="donut"
//               width={"100%"}
//               height="100%"
//             />
//         </div>
//       </section>
//     </>
//   );
// };

// export default PieChart;
