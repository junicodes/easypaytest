

import React from 'react'
import TabOneBodyView from '../tab-sub/TabOneBodyView'
import TabOneSidebar from '../tab-sub/TabOneSidebar'

const TabOne = () => {
  return (
    <div className='flex justify-between rounded-2xl h-full shadow-2xl shadow-gray-200'>
        <div className='w-1/6'>
           <TabOneSidebar />
        </div>
        <div className='w-5/6'>
           <TabOneBodyView />   
        </div>
    </div>
  )
}

export default TabOne