


import React from 'react'
import Activities from './Activities'
import AtmCard from './AtmCard'
import BillView from './BillView'
import GrowthChart from './GrowthChart'
import Invoice from './Invoice'
import InvoiceChart from './InvoiceChart'
import PaymentConnect from './PaymentConnect'
import Subscription from './Subscription'

const TabOneBodyView = () => {
  return (
    <div className='flex justify-between'>
        <div className='w-4/6 p-8'>
            <h1 className='my-2 text-3xl text-black font-medium'>
                Billing details
            </h1>
            <div className='flex justify-between space-x-6'>
                <AtmCard />
                <InvoiceChart />
            </div>
            <h1 className='mt-8 mb-3 text-lg font-medium'>Payment history</h1>
            <div className='flex justify-between space-x-3'>
                <Invoice />
                <Subscription />
            </div>
            <GrowthChart />
            <PaymentConnect />
        </div>
        <div className='w-2/6 p-8 space-y-8 flex flex-col justify-between'>
            <Activities />
            <BillView />
        </div>
    </div>
  )
}

export default TabOneBodyView