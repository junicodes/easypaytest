

import React from 'react'
import PieChart from '../../Packages/Charts/ReChart/PieChartView'
import SimpleAreaChart from '../../Packages/Charts/ReChart/SimpleAreaChart'

const data = [
  {
    date: 'Jan',
    uv: 300,
    pv: 2400,
    amt: 1700,
  },
  {
    date: 'Feb',
    uv: 700,
    pv: 1398,
    amt: 1210,
  },
  {
    date: 'Mar',
    uv: 1200,
    pv: 9800,
    amt: 2290,
  },
  {
    date: 'Apr',
    uv: 780,
    pv: 3908,
    amt: 1000,
  },
  {
    date: 'May',
    uv: 490,
    pv: 4800,
    amt: 2181,
  },
  {
    date: 'June',
    uv: 490,
    pv: 4800,
    amt: 1281,
  },
  {
    date: 'July',
    uv: 490,
    pv: 4800,
    amt: 1781,
  },
  {
    date: 'Aug',
    uv: 490,
    pv: 4800,
    amt: 1481,
  }
];

const areaOption = {
  data,
  width: 500,
  height: 400,
  margin: {
    top: 0,
    right: 20,
    left: -22,
    bottom: 40,
  }
}

const InvoiceChart = () => {
  return (
    <div className='border w-1/2 h-48 xl:h-56 rounded-lg relative'>
        <p className="text-black font-bold text-sm text-left px-2 py-2">Invoice</p>
        <SimpleAreaChart areaOption={areaOption}/>
    </div>
  )
}

export default InvoiceChart