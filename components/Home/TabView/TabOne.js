

import React from 'react'
import TabOneBodyView from '../tab-sub/TabOneBodyView'
import TabOneSidebar from '../tab-sub/TabOneSidebar'
import { useMediaQuery } from 'react-responsive'

const TabOne = () => {
    const isTab = useMediaQuery({
        query: '(max-width: 1224px)'
    })

  return (
    <div className='flex justify-center lg:justify-between rounded-2xl lg:h-full shadow-2xl shadow-gray-200 h-96 bg-white'>
        <div className='hidden lg:block w-2/12 xl:w-1/6'>
           <TabOneSidebar />
        </div>
        <div className='hidden lg:block w-10/12 xl:w-5/6'>
           <TabOneBodyView />   
        </div>
        {
            isTab &&
             <div className='lg:hidden flex justify-center items-center'>
                 <p className='text-center'>Table cannot display on smaller screen</p>
            </div>
        }
    </div>
  )
}

export default TabOne