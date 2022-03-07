import React from "react";
import SwitchComp from "../../ReuseComponents/SwitchComp";
import styles from "../styles/Body.module.css";


const ShowcaseTwo = () => {
  

  const getSwitchAction = (action) => {
    console.log(action, "action gotten")
  }
  return (
    <>
      <div className="divblock w-full flex flex-col justify-center my-10 xl:my-44 rounded-2xl">
         <div className="w-full lg:w-11/12 3xl:w-9/12 md:space-x-6 mx-auto h-full flex flex-col md:flex-row justify-center xl:justify-between">

         <div className="w-full md:w-1/2 p-2 innerBlock2 flex justify-center items-center flex-col rounded-xl relative order-last md:order-first">

            <div className="w-full sm:w-8/12 md:w-11/12 2xl:w-7/12 boxH mt-5 xl:translate-x-2 -translate-y-6 rounded-3xl shadow-2xl shadow-gray-200">
              <div className="pb-0 xl:pb-4 p-4 relative">
                 <img className="w-12 h-12 absolute top-2 left-2 xl:left-8" src={`/images/black-arrow.jpg`} />
                 <p className="text-lg text-white text-center">Checkout</p>
              </div>
              <div className="p-2 xl:p-4">
                <div>
                    <div className="flex justify-between mb-2">
                        <div className="mt-2 relative flex justify-start space-x-3 items-center">
                            <img className="w-12 h-12" src={`/images/premium-plan.jpg`} />
                            <p className="text-sm text-white text-left">
                                Premium plan <br></br>
                                <span className="text-gray-500">$8/month - Billed monthly</span>
                            </p>
                        </div>
                        <p className="text-sm xl:text-lg text-white text-center">$12</p>
                    </div>
                    <hr className="border-gray-700"></hr>
                </div>
                <div>
                    <div className="flex justify-between mb-3 pt-2">
                        <div className="mt-2 relative flex justify-start space-x-3 items-center">
                            <img className="w-12 h-12" src={`/images/friend-addon.jpg`} />
                            <p className="text-sm text-white text-left">
                                Premium plan <br></br>
                                <span className="text-gray-500">$5/month - Billed monthly</span>
                            </p>
                        </div>
                        <p className="text-sm xl:text-lg text-white text-center">$8</p>
                    </div>
                    <input className="bg-black border border-gray-600 h-10 mb-2 rounded-lg px-3" placeholder="Coupon code" />
                    <hr className="border-gray-700"></hr>
                </div>
                <div>
                    <div className="flex justify-between mb-2">
                        <div className="mt-2 relative flex justify-start space-x-3 items-center">
                            <p className="text-sm text-white text-left">
                                Subtotal<br></br>
                                <span className="text-gray-500">Tax (if applicable)</span>
                            </p>
                        </div>
                        <p className="text-sm xl:text-lg text-white text-center">$8000</p>
                    </div>
                    <hr className="border-gray-700"></hr>
                </div>
                <div className="flex justify-between">
                        <div className="mt-4 relative flex justify-start space-x-3 items-center">
                            <p className="text-sm text-white text-left">
                                    Total
                            </p>
                        </div>
                        <p className="text-sm xl:text-lg text-white text-center">$8000</p>
                    </div>
              </div>
            </div>

            <div className="bg-white h-52 md:w-80 absolute bottom-14 right-0 xl:-right-5 rounded-2xl shadow-lg shadow-gray-100 p-4">
                
                <div className="flex justify-between items-center space-x-2">
                    <h5 className="text-gray-500 font-semibold text-sm xl:text-lg">
                      Amount Due (USD)
                    </h5>
                    <img className="w-8 h-5" src={`/images/three-menu-bar.jpg`} />
                </div>
                <div className=" mt-3 mb-2">
                    <h5
                        className="text-lg xl:text-2xl font-semibold"
                        style={{ color: "#0b254a" }}
                        >
                        $ 7,854 USD <span className="text-xs text-gray-600 font-normal">(Tax Incl.)</span>
                    </h5>
                    <div className=" w-40 h-8 my-4 flex justify-center items-center rounded-3xl" style={{background: '#e4f9f0'}}>
                       <p className="text-xs xl:text-sm" style={{ color: "#0b254a" }}> Due on Jan 20, 2022</p>
                    </div>
                </div>

                <hr></hr>
                <div className="flex justify-between items-center space-x-4 md:space-x-0 pt-2">
                    <h5 className="text-black text-xs md:text-sm xl:text-md font-semibold">
                        Also attach PDF in mail
                    </h5>
                    <SwitchComp onGetSwitchAction={getSwitchAction} />
                </div>
            </div>
          </div>

          
          <div className="w-full md:w-1/2 md:p-10 my-10 order-first md:order-last">
            <h1
              className={`${styles.heroText} text-left`}
              style={{ fontSize: "32px" }}
            >
              Systematic collection
            </h1>
            <p className="text-lg md:text-sm xl:text-lg text-left mt-8 mb-5 text-gray-600 leading-normal">
              Never forget to follow up on an unpaid invoice by <br></br>
              setting up systematic collection schedules.
            </p>
            <nav className="mb-5">
              <ul>
                <li className="flex justify-start space-x-2 my-4 text-gray-500">
                  <img className="w-5 h-5" src={`/images/blue-check.jpg`} />
                  <span className="text-md">Keep clients happy using personalised reminders</span>
                </li>
                <li className="flex justify-start space-x-2 my-4 text-gray-500">
                  <img className="w-5 h-5" src={`/images/blue-check.jpg`} />
                  <span className="text-md">Send emails and registered letters</span>
                </li>
                <li className="flex justify-start space-x-2 my-4 text-gray-500">
                  <img className="w-5 h-5" src={`/images/blue-check.jpg`} />
                  <span className="text-md">Keep the right stakeholders in the loop</span>
                </li>
              </ul>
            </nav>
            <div className="flex justify-start items-center mt-10 space-x-2">
              <p className="text-lg" style={{ color: "#5d95ea" }}>
                 Apply industry best practices
              </p>
              <img className="w-6 h-5" src={`/images/blue-arrow.jpg`} />
            </div>
          </div>

        </div>

      </div>
      <style jsx>{`
        .divblock {
          height: 500px;
        }
        .innerBlock2 {
          background: #eef9f3;
        }
        .boxH {
          height: 400px;
          background: #242424;
        }
        @media not all and (min-resolution:.001dpcm) { 
            @media screen and (min-width: 1950px) {  
                .boxH {
                    height: 550px;
                    background: #242424;
                }
            }
        }
        @media screen and (max-width: 767px) {  
            .divblock {
               height: 1000px;
            }
            .innerBlock2 {
               height: 800px;
            }
        }
      `}</style>
    </>
  );
};

export default ShowcaseTwo;
