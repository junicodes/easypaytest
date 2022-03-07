import React from "react";
import { HiChevronDown } from "react-icons/hi";
import PieChartView from "../../Packages/Charts/ReChart/PieChartView";
import styles from "../styles/Body.module.css";
const data = [
  { name: "Transport", value: 4000.59 },
  { name: "Online shopping", value: 5900.00 },
  { name: "Retaurant", value: 4593.10 },
];

const areaOption = {
  data,
  width: 800,
  height: 400,
  margin: {
    top: 0,
    right: 0,
    left: 0,
    bottom: 70,
  },
};

const ShowcaseOne = () => {
  return (
    <>
      <div className="divblock w-full flex flex-col justify-center mt-10 md:my-44 rounded-xl">
        <div className="w-full lg:w-11/12 3xl:w-9/12 mx-auto h-full flex flex-col md:flex-row justify-center md:justify-between">

          <div className="w-full lg:w-1/2 md:p-10 my-10">
            <h1 className={`${styles.heroText} text-left`} style={{fontSize: "32px"}}>
              Understand your cash flow
            </h1>
            <p className="text-lg md:text-sm xl:text-lg text-left mt-8 mb-5 text-gray-600 leading-normal">
              Make better business decisions through a deep, <br></br> 
              real time view of accounts receivable.
            </p>
            <nav className="mb-5">
                <ul>
                    <li className="flex justify-start space-x-2 my-4 text-gray-500">
                        <img className="w-5 h-5" src={`/images/blue-check.jpg`} />
                        <span className="text-md">Dashboard</span>
                    </li>
                    <li className="flex justify-start space-x-2 my-4 text-gray-500">
                        <img className="w-5 h-5" src={`/images/blue-check.jpg`} />
                        <span className="text-md">Financial projections</span>
                    </li>
                    <li className="flex justify-start space-x-2 my-4 text-gray-500">
                        <img className="w-5 h-5" src={`/images/blue-check.jpg`} />
                        <span className="text-md">Days sales outstanding</span>
                    </li>
                </ul>
            </nav>
            <div className="flex justify-start items-center mt-10 space-x-2">
               <p className='text-lg' style={{color: "#5d95ea"}}>Learn about insights</p>
               <img className="w-6 h-5" src={`/images/blue-arrow.jpg`} />
            </div>
          </div>

          <div className="w-full lg:w-1/2 innerBlock2 flex justify-center items-center flex-col rounded-xl relative">

            <div className="bg-white w-10/12 innerBlock22 -translate-x-4 -translate-y-7 rounded-2xl shadow-2xl shadow-gray-200">
              <div className="flex justify-between px-2 lg:px-8 pt-6">
                <h5
                  className="text-2xl font-semibold text-left"
                  style={{ color: "#0b254a" }}
                >
                  Expenes instead
                </h5>
                <div className="flex justify-start items-center">
                  <p className="text-gray-300 text-xs truncate text-right">
                    Month
                  </p>
                  <p className="flex items-center text-xl text-gray-300">
                    <HiChevronDown />
                  </p>
                </div>
              </div>
              <div className="w-full h-full rounded-lg relative flex justify-between">
                <ul className="w-5/12 text-sm p-2 lg:p-8">
                    <li className={`${styles.lifeat1} my-2 font-semibold`}>
                        <p className="-mt-6 ml-5 text-xs">
                            Transport <br></br>{" "}
                            <span className="font-normal text-gray-300">$4,000.59 </span>
                        </p>
                    </li>
                    <li className={`${styles.lifeat2} my-2 font-semibold`}>
                        <p className="-mt-6 ml-5 text-xs">
                            Online Shopping <br></br>
                            <span className="font-normal text-gray-300"> $5,900.00 </span>
                        </p>
                    </li>
                    <li className={`${styles.lifeat2} my-2 font-semibold`}>
                        <p className="-mt-6 ml-5 text-xs">
                            Retaurant <br></br>
                            <span className="font-normal text-gray-300"> $4,593.10 </span>
                        </p>
                    </li>
                </ul>
                <PieChartView areaOption={areaOption} />
              </div>
            </div>

            <div className="bg-white h-40 w-64 lg:w-80 absolute bottom-14 -right-0 xl:-right-20 rounded-2xl p-8 shadow-2xl shadow-gray-200">
                <div className="flex justify-start items-center space-x-2">
                    <img className="w-5 h-5" src={`/images/coperate-logo.jpg`} />
                    <h5 className="text-gray-500 font-semibold text-left text-md">
                      Coperate
                    </h5>
                </div>
                <div className=" mt-5">
                    <h5
                        className="text-md font-semibold"
                        style={{ color: "#0b254a" }}
                        >
                        7854 USD
                    </h5>
                </div>
                <div className="flex justify-between items-center my-3">
                    <h5 className="text-gray-500 text-xs font-semibold text-right">
                        ****5676
                    </h5>
                    <div className="flex justify-start items-center space-x-2 mt-2">
                        <img className="w-6 h-4" src={`/images/coperate-icon.jpg`} />
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
      <style jsx>{`
        .divblock {
          height: 500px;
        }
        .innerBlock2 {
          background: #f4f9ff;
        }
        .innerBlock22 {
          height: 300px;
        }
        @media screen and (max-width: 767px) {  
            .divblock {
               height: 900px;
            }
            .innerBlock2 {
               height: 600px;
               background: #f4f9ff;
            }
            .innerBlock22 {
               height: 400px;
            }
        }
      `}</style>
    </>
  );
};

export default ShowcaseOne;
