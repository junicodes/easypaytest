import React from "react";
import SwitchComp from "../../ReuseComponents/SwitchComp";
import styles from "../styles/Body.module.css";


const ShowcaseTwo = () => {
  

  const getSwitchAction = (action) => {
    console.log(action, "action gotten")
  }
  return (
    <>
      <div className="divblock w-full flex flex-col justify-center my-44 rounded-2xl">
        <div className="w-11/12 3xl:w-9/12 mx-auto h-full flex justify-between">

          <div className="w-1/2 innerBlock2 flex justify-center items-center flex-col rounded-xl relative">

            <div className="w-9/12 boxH translate-x-4 -translate-y-6 rounded-3xl shadow-2xl shadow-gray-200">
              <div className="p-4 mt-4 relative">
                 <img className="w-12 h-12 absolute top-2 left-8" src={`/images/black-arrow.jpg`} />
                 <p className="text-lg text-white text-center">Checkout</p>
              </div>
              <div className="p-8">
                <div>
                    <div className="flex justify-between mb-3">
                        <div className="mt-4 relative flex justify-start space-x-3 items-center">
                            <img className="w-12 h-12" src={`/images/premium-plan.jpg`} />
                            <p className="text-lg text-white text-left">
                                Premium plan <br></br>
                                <span className="text-gray-500">$8/month - Billed monthly</span>
                            </p>
                        </div>
                        <p className="text-lg text-white text-center">$12</p>
                    </div>
                    <hr className="border-gray-700"></hr>
                </div>
                <div>
                    <div className="flex justify-between mb-3 pt-2">
                        <div className="mt-4 relative flex justify-start space-x-3 items-center">
                            <img className="w-12 h-12" src={`/images/friend-addon.jpg`} />
                            <p className="text-lg text-white text-left">
                                Premium plan <br></br>
                                <span className="text-gray-500">$5/month - Billed monthly</span>
                            </p>
                        </div>
                        <p className="text-lg text-white text-center">$8</p>
                    </div>
                    <input className="bg-black border border-gray-600 h-10 mt-1 mb-4 rounded-lg px-3" placeholder="Coupon code" />
                    <hr className="border-gray-700"></hr>
                </div>
                <div>
                    <div className="flex justify-between mb-4">
                        <div className="mt-4 relative flex justify-start space-x-3 items-center">
                            <p className="text-lg text-white text-left">
                                Subtotal<br></br>
                                <span className="text-gray-500">Tax (if applicable)</span>
                            </p>
                        </div>
                        <p className="text-lg text-white text-center">$8000</p>
                    </div>
                    <hr className="border-gray-700"></hr>
                </div>
                <div className="flex justify-between mb-4">
                        <div className="mt-4 relative flex justify-start space-x-3 items-center">
                            <p className="text-2xl text-white text-left">
                                    Total
                            </p>
                        </div>
                        <p className="text-lg text-white text-center">$8000</p>
                    </div>
                </div>
            </div>

            <div className="bg-white h-72 w-96 absolute bottom-14 -right-5 rounded-2xl shadow-lg shadow-gray-100 p-8">
                
                <div className="flex justify-between items-center space-x-2">
                    <h5 className="text-gray-500 font-semibold text-md">
                      Amount Due (USD)
                    </h5>
                    <img className="w-8 h-5" src={`/images/three-menu-bar.jpg`} />
                </div>
                <div className=" mt-5 mb-8">
                    <h5
                        className="text-3xl font-semibold"
                        style={{ color: "#0b254a" }}
                        >
                        $ 7,854 USD <span className="text-sm text-gray-600 font-normal">(Tax Incl.)</span>
                    </h5>
                    <div className=" w-48 h-10 my-4 flex justify-center items-center rounded-3xl" style={{background: '#e4f9f0'}}>
                       <p className="" style={{ color: "#0b254a" }}> Due on Jan 20, 2022</p>
                    </div>
                </div>

                <hr></hr>
                <div className="flex justify-between items-center pt-5">
                    <h5 className="text-black text-md font-semibold">
                        Also attach PDF in mail
                    </h5>
                    <SwitchComp onGetSwitchAction={getSwitchAction} />
                </div>
            </div>
          </div>

          
          <div className="w-1/2 p-20 mt-10">
            <h1
              className={`${styles.heroText} text-left`}
              style={{ fontSize: "32px" }}
            >
              Systematic collection
            </h1>
            <p className="text-lg text-left mt-8 mb-5 text-gray-600 leading-normal">
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
          height: 700px;
        }
        .innerBlock2 {
          background: #eef9f3;
        }
        .boxH {
          height: 500px;
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
      `}</style>
    </>
  );
};

export default ShowcaseTwo;
