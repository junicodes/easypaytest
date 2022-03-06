
import React from 'react'

const Invoice = () => {
  return (
    <div className='border w-1/2 h-40 rounded-lg p-6'>
        <div>
          <h5 className="text-lg font-semibold text-left" style={{color: '#0b254a'}}>
            Invoice
          </h5>
          <p className="text-gray-300 font-bold text-lg text-left leading-normal" style={{fontSize: '9px'}}>
            Where a payment provide <br></br> offer multiple types
          </p>
        </div>
        <div className='mt-8 flex justify-between'>
          <h5 className="text-xl font-semibold text-left" style={{color: '#0b254a'}}>
            $ 99.00<span className='text-gray-300'>/mo</span>
          </h5>
          <button
            className={`btn w-16 h-7 rounded-md border text-center text-white text-xs font-semibold`}
          >
            Detail
          </button>
        </div>
        <style jsx>{`
          .btn {
            background: #154ea5;
          }
        `}</style>
    </div>
  )
}

export default Invoice