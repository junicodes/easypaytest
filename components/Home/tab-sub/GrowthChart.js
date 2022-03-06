

import React from 'react'
import NoAxisAreaChart from '../../Packages/Charts/ReChart/NoAxisAreaChart';
import PieChart from '../../Packages/Charts/ReChart/PieChartView'
import SimpleAreaChart from '../../Packages/Charts/ReChart/SimpleAreaChart'

const data = [
  {
    date: 'Jan 2022',
    uv: 300,
    pv: 2400,
    amt: 1700,
  },
  {
    date: 'Feb 2022',
    uv: 700,
    pv: 1398,
    amt: 1210,
  },
  {
    date: 'Mar 2022',
    uv: 1200,
    pv: 9800,
    amt: 2290,
  },
  {
    date: 'Apr 2022',
    uv: 780,
    pv: 3908,
    amt: 1000,
  },
  {
    date: 'May 2022',
    uv: 490,
    pv: 4800,
    amt: 2181,
  },
  {
    date: 'June 2022',
    uv: 490,
    pv: 4800,
    amt: 1281,
  },
  {
    date: 'July 2022',
    uv: 490,
    pv: 4800,
    amt: 1781,
  },
  {
    date: 'Aug 2022',
    uv: 490,
    pv: 4800,
    amt: 1481,
  },
  {
    date: 'Sept 2022',
    uv: 490,
    pv: 4800,
    amt: 1781,
  },
  {
    date: 'Oct 2022',
    uv: 490,
    pv: 4800,
    amt: 1281,
  },
  {
    date: 'Nov 2022',
    uv: 490,
    pv: 4800,
    amt: 1781,
  },
  {
    date: 'Dec 2022',
    uv: 490,
    pv: 4800,
    amt: 1281,
  }
];

const areaOption = {
  data,
  width: 500,
  height: 400,
  margin: {
    top: 80,
    right: 0,
    left: 0,
    bottom: 0,
  }
}

const InvoiceChart = () => {
  return (
    <div className='border w-full h-48 rounded-2xl mt-5 relative overflow-hidden'>
        <NoAxisAreaChart areaOption={areaOption}/>
    </div>
  )
}

export default InvoiceChart