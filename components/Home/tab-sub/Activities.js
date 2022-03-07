import React from 'react'

const Activities = () => {
  return (
    <>
      <div className='border h-1/2 rounded-lg p-4 pt-6'>
        <h1 className='mb-1 xl:mb-3 text-lg font-medium'>Activities</h1>
        <div className="m-2 xl:m-3 bg-white rounded-md flex justify-start space-x-3 items-start h-auto">
          <div className='pb-1 xl:pb-2 border-l w-full relative'>
            <div className="rounded-full bg-white w-14 h-14 flex justify-center items-center absolute -top-2 -left-7">
              <img className="rounded-full border border-gray-100 shadow-sm w-8 h-8" src="https://randomuser.me/api/portraits/women/92.jpg" alt="user image" />
            </div>
            <div className='ml-10'>
              <div className='flex justify-start items-center mb-1'>
                <img className="shadow-sm w-4 h-4 mr-2" src="/images/tab-flag.jpg" alt="flag" />
                <small className='text-xs' style={{color: "#5d95ea"}}>New Invoice</small>
              </div>
              <h5 className="text-black text-xs font-semibold py-1 truncate">Okechukwu Obi <span className='text-gray-500 font-normal'>created</span></h5>
              <p className="text-gray-500 text-xs xl:text-xs truncate pb-1">Invoice UT-75F54</p>
              <small className='text-xs text-gray-400'>Just Now</small>
            </div>
          </div>
        </div>
        <div className="m-2 xl:m-3 bg-white rounded-md flex justify-start space-x-3 items-start h-auto">
          <div className='pb-1 xl:pb-2 border-l w-full relative'>
            <div className="rounded-full bg-white w-14 h-14 flex justify-center items-center absolute -top-2 -left-7">
              <img className="rounded-full border border-gray-100 shadow-sm w-8 h-8" src="images/tab-default-notification.jpg" alt="user image" />
            </div>
            <div className='ml-10'>
              <h5 className="text-black text-xs font-semibold py-1 truncate">Okechukwu Obi <span className='text-gray-500 font-normal'>created</span></h5>
              <p className="text-gray-500 text-xs truncate pb-1">Was sent to Chester Corp</p>
              <small className='text-xs text-gray-400'>Friday, 05:45 PM</small>
            </div>
          </div>
        </div>
        <div className="m-2 xl:m-3 bg-white rounded-md flex justify-start space-x-3 items-start h-auto">
          <div className='pb-1 xl:pb-2 border-l w-full relative'>
            <div className="rounded-full bg-white w-14 h-14 flex justify-center items-center absolute -top-2 -left-7">
              <img className="rounded-full border border-gray-100 shadow-sm w-8 h-8" src="https://randomuser.me/api/portraits/women/81.jpg" alt="user image" />
            </div>
            <div className='ml-10'>
              <div className='flex justify-start items-center mb-1'>
                <img className="shadow-sm w-4 h-4 mr-2" src="/images/tab-flag.jpg" alt="flag" />
                <small className='text-xs' style={{color: "#5d95ea"}}>New Invoice</small>
              </div>
              <h5 className="text-black text-xs font-semibold py-1 truncate">Okechukwu Obi <span className='text-gray-500 font-normal'>created</span></h5>
              <p className="text-gray-500 text-xs truncate pb-1">Invoice UT-75F54</p>
              <small className='text-xs text-gray-400'>Just Now</small>
            </div>
          </div>
        </div>
        <div className="m-2 xl:m-3 bg-white rounded-md flex justify-start space-x-3 items-start h-auto">
          <div className='pb-1 xl:pb-2 border-l w-full relative'>
            <div className="rounded-full bg-white w-14 h-14 flex justify-center items-center absolute -top-2 -left-7">
              <img className="rounded-full border border-gray-100 shadow-sm w-8 h-8" src="https://randomuser.me/api/portraits/women/81.jpg" alt="user image" />
            </div>
            <div className='ml-10'>
              <h5 className="text-black text-xs font-semibold py-1 truncate">Okechukwu Obi <span className='text-gray-500 font-normal'>created</span></h5>
              <p className="text-gray-500 text-xs truncate pb-1">Invoice UT-75F54</p>
            </div>
            
          </div>
        </div>
      </div>
      <style>{`

      `}</style>
    </>
  )
}

export default Activities