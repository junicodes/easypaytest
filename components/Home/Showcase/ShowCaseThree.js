

import React from 'react'
import SimpleBarChart from '../../Packages/Charts/ReChart/SimpleBarChart';
import styles from "../styles/Body.module.css";


const data = [
    {
      name: 'Jan',
      uv: 4000,
      pv: 2400,
      amt: 700,
    },
    {
      name: 'Feb',
      uv: 3000,
      pv: 1398,
      amt: 1210,
    },
    {
      name: 'Mar',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Apr',
      uv: 2780,
      pv: 3908,
      amt: 800,
    },
    {
      name: 'May',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'June',
      uv: 2390,
      pv: 3800,
      amt: 3000,
    },
    {
      name: 'July',
      uv: 3490,
      pv: 4300,
      amt: 500,
    },
    {
      name: 'Aug',
      uv: 2390,
      pv: 3800,
      amt: 3000,
    },
    {
      name: 'Sep',
      uv: 3490,
      pv: 4300,
      amt: 500,
    },
  ];

const areaOption = {
    data,
    width: 500,
    height: 400,
    margin: {
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
    }
  }
const ShowcaseThree = () => {
  return (
    <>
        <div className="divblock w-full flex flex-col justify-center mt-10 md:my-44 rounded-xl">
        <div className="w-full lg:w-11/12 3xl:w-9/12 mx-auto h-full flex flex-col md:flex-row justify-center md:justify-between">
                <div className="w-full lg:w-1/2 md:p-10 md:my-10">
                    <h1 className={`${styles.heroText} text-left`} style={{fontSize: "32px"}}>
                     Streamlined payments
                    </h1>
                    <p className="text-lg md:text-sm xl:text-lg text-left mt-8 mb-5 text-gray-600 leading-normal">
                    Offer new payments methods that better suit your<br></br> 
                    customer&apos;s needs reduce your time to get <br></br> paid.
                    </p>
                    <nav className="mb-5">
                        <ul>
                            <li className="flex justify-start space-x-2 my-4 text-gray-500">
                                <img className="w-5 h-5" src={`/images/blue-check.jpg`} />
                                <span className="text-md">Simplified payment experience for your customers</span>
                            </li>
                            <li className="flex justify-start space-x-2 my-4 text-gray-500">
                                <img className="w-5 h-5" src={`/images/blue-check.jpg`} />
                                <span className="text-md">Offer new payment methods</span>
                            </li>
                            <li className="flex justify-start space-x-2 my-4 text-gray-500">
                                <img className="w-5 h-5" src={`/images/blue-check.jpg`} />
                                <span className="text-md">Automatic reconcilation</span>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex justify-start items-center mt-10 space-x-2">
                        <p className='text-lg' style={{color: "#5d95ea"}}>Discover our payment platform</p>
                        <img className="w-6 h-5" src={`/images/blue-arrow.jpg`} />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 innerBlock2 p-4 mb-20 md:mb-0 mt-10 md:mt-0 flex justify-center items-center flex-col rounded-xl relative">
                    <div className='bg-white w-full md:w-10/12 shadow-2xl shadow-gray-200 boxH rounded-2xl'>
                        <div className='p-8'>
                            <div className="flex justify-between items-center">
                                <h5
                                className="text-xl font-semibold text-left"
                                style={{ color: "#0b254a" }}
                                >
                                My spendings
                                </h5>
                                <img className="w-5 h-5" src={`/images/spending-toggle.jpg`} />
                            </div>
                            <h5 className="text-2xl font-semibold mt-5"
                                style={{ color: "#0b254a" }}
                                >
                                $ 7,854 USD
                            </h5>
                            <div className='flex justify-start text-xs text-gray-300 space-x-4' style={{fontSize: '9px'}}>
                                <p>USD / EUR</p>
                                <p>1,46471 / 2,48574</p>
                            </div>
                        </div>
                        <div className='w-full h-52'>
                          <SimpleBarChart areaOption={areaOption}/>
                        </div>
                    </div>
                    <div className='bg-white boxHModal shadow-2xl shadow-gray-200 xl:w-80 absolute bottom-2 -right-5 rounded-2xl p-6'>
                        <h5
                            className="text-sm font-bold text-left text-black"
                            >
                            Last Transaction
                        </h5>
                        <div>
                            <div className="flex justify-between xl:mt-2 items-center">
                                <div className="relative flex justify-start space-x-3 my-2 items-center">
                                    <img className="w-9 h-9" src={`/images/spotify.jpg`} />
                                    <p className="text-xs text-left leading-tight font-semibold" style={{ color: "#0b254a" }}>
                                        Spotify <br></br>
                                        <span className="text-gray-400" style={{fontSize: '8px'}}>Debit Card</span>
                                    </p>
                                </div>
                                <p className="text-sm text-center" style={{ color: "#0b254a" }}>78.69</p>
                            </div>
                            <div className="flex justify-between xl:mt-2 items-center">
                                <div className="relative flex justify-start space-x-3 my-2 items-center">
                                    <img className="w-9 h-9" src={`/images/nike.jpg`} />
                                    <p className="text-xs text-left leading-tight font-semibold" style={{ color: "#0b254a" }}>
                                        Nike <br></br>
                                        <span className="text-gray-400" style={{fontSize: '8px'}}>Debit Card</span>
                                    </p>
                                </div>
                                <p className="text-sm text-center" style={{ color: "#0b254a" }}>78.69</p>
                            </div>
                            <div className="flex justify-between xl:mt-2 items-center">
                                <div className="relative flex justify-start space-x-3 my-2 items-center">
                                    <img className="w-9 h-9" src={`/images/apple.jpg`} />
                                    <p className="text-xs text-left leading-tight font-semibold" style={{ color: "#0b254a" }}>
                                        Apple Store <br></br>
                                        <span className="text-gray-400" style={{fontSize: '8px'}}>Debit Card</span>
                                    </p>
                                </div>
                                <p className="text-sm text-center" style={{ color: "#0b254a" }}>78.69</p>
                            </div>
                            <div className="flex justify-between xl:mt-2 items-center">
                                <div className="relative flex justify-start space-x-3 my-2 items-center">
                                    <img className="w-9 h-9" src={`/images/paypal.jpg`} />
                                    <p className="text-xs text-left leading-tight font-semibold" style={{ color: "#0b254a" }}>
                                        Paypal <br></br>
                                        <span className="text-gray-400" style={{fontSize: '8px'}}>Debit Card</span>
                                    </p>
                                </div>
                                <p className="text-sm text-center" style={{ color: "#0b254a" }}>78.69</p>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
        <style jsx>{`
            .divblock {
                height: 600px;
            }
            .innerBlock2 {
                background: #fef9f5;
            }
            .boxH {
                height: 370px;
            }
            .boxHModal {
                height: 300px;
            }
            @media not all and (min-resolution:.001dpcm) { 
                @media screen and (min-width: 1950px) {  
                    .boxH {
                        height: 410px;
                    }
                    .boxHModal {
                        height: 350px;
                    }
                }
            }
            @media screen and (max-width: 767px) {  
                .divblock {
                   height: 1000px;
                }
                .innerBlock2 {
                   height: 600px;
                   background: #f4f9ff;
                }
                .innerBlock22 {
                   height: 400px;
                }
                .boxHModal {
                    height: 250px;
                }
            }
        `}</style>
    </>
  )
}

export default ShowcaseThree