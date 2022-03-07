
import React from 'react'
import styles from './styles/Header.module.css'
import { BiWifi0, BiChevronRight } from "react-icons/bi";

const HeroCard = () => {
  return (
        <div className={`${styles.heroCardBig} bg-white rounded-3xl mt-24 xl:mt-32 shadow-2xl shadow-gray-200 p-6`}>
           <h3 className='text-xl font-semibold' style={{color: "#0b254a"}}>
               Pay this invoice
           </h3>
           <p className="text-lg mt-2 text-gray-600">
               Make payment for this invoice by filling in the details
           </p>
           <div className='relative'>
                <div className={`${styles.heroCardmini} bg-white absolute -ml-40 mt-12 rounded-3xl shadow-2xl shadow-gray-200`}>
                    <div className='flex justify-between p-4'>
                        <div>
                            <p className='text-sm font-medium pl-4 my-1 text-gray-500'>TOTAL RECEIVED</p>
                            <div className='flex justify-start'>
                                <p className='text-slate-500 mr-1' style={{fontSize: '24px'}}>$</p>
                                <h1 className={`${styles.largeText}`}>
                                    74, 568
                                    <span className='text-slate-500'>.71</span>
                                </h1>
                            </div>
                        </div>
                        <div className='flex justify-center flex-col'>
                            <p className='text-xs font-medium text-gray-500 flex items-center justify-start my-1'>
                                <span className='-mt-2 -mr-1'>
                                    <BiWifi0 className='text-lg'/>
                                </span>
                                Pending
                            </p>
                        <p className={`${styles.largeText}`} style={{fontSize: '18px'}}>$7476<span className='text-slate-500'>.41</span></p>
                        </div>
                    </div>
                </div>


                <div className='border h-14 rounded-md mt-4 flex justify-start px-4 items-center'>
                    <img className='w-10 h-7' src='/images/card-num.jpg' />
                    <p className='mx-2 text-xl' style={{color: "#0b254a"}}>Card number</p>
                </div>
                <div className='border h-14 rounded-md mt-8'></div>
                <h5 className='text-lg font-semibold mt-2 tracking-wide' style={{color: "#0b254a"}}>MORE PAYMENT METHODS</h5>
                <button className='w-full h-16 mt-10' style={{background: "#154ea5"}}>
                    <div className='flex justify-center items-center text-xl font-bold text-white'>
                        <p>PAY $ 1400 </p>
                        <p className='text-4xl'><BiChevronRight/></p>
                    </div>
                </button>
           </div>
        </div>
  )
}

export default HeroCard