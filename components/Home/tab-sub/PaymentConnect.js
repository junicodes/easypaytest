

import React from 'react'

const PaymentConnect = () => {
  
  const connects = [
    ['Stripe', 'tab-stripe.jpg', 'Accept payment with Stripe'],
    ['Razorpay', 'tab-razorpay.jpg', 'Accept payment with Razorpay']
  ]
  return (
    <>
        {
          connects.map(([title, image, desc]) => (
            <div className='border w-full my-5 h-16 rounded-lg p-5 flex justify-start items-center'>
              <div className='w-1/12'>
                <img className="w-12 h-5 mr-3" src={`/images/${image}`} />
              </div>
              <div className='flex justify-between items-center w-11/12'>
                <div>
                  <h5 className="text-xs font-semibold text-left" style={{color: '#0b254a'}}>
                    {title}
                  </h5>
                  <p className="text-gray-300 font-bold text-lg text-left leading-normal" style={{fontSize: '8px'}}>
                    {desc}
                  </p>
                </div>
                <button
                  className={`btn w-24 h-10 rounded-md border text-center text-white text-xs font-semibold`}
                  >
                  Detail
                </button>
              </div>
              <style jsx>{`
                .btn {
                  border: 1px solid #807df8;
                  color: #807df8;
                }
              `}</style>
            </div>
          ))
        }
    </>
  )
}

export default PaymentConnect