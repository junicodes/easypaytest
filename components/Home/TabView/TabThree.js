
import React from 'react'
import { useMediaQuery } from 'react-responsive'

const TabThree = () => {
    const isTab = useMediaQuery({
        query: '(max-width: 1224px)'
    })
  return (
    <div className='flex justify-center rounded-2xl shadow-2xl shadow-gray-200 h-96 bg-white'>
        {
            !isTab &&
             <div className='flex justify-center items-center'>
                 <p className='text-center'>No tab to display at this time</p>
             </div>
        }
        {
            isTab &&
             <div className='flex justify-center items-center'>
                 <p className='text-center'>Table cannot display on smaller screen</p>
            </div>
        }
    </div>

  )
}

export default TabThree;