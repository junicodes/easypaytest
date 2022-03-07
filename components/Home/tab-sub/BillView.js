import React from "react";

const BillView = () => {
  return (
    <div className="border h-1/2 rounded-lg">
      <div className="flex flex-col justify-center items-center mt-2 xl:mt-6">
        <img
          className="rounded-full border border-gray-100 shadow-sm w-10 h-10"
          src="https://randomuser.me/api/portraits/lego/4.jpg"
          alt="user image"
        />
        <h5
          className="text-sm my-1 font-semibold text-left"
          style={{ color: "#0b254a" }}
        >
          Starbuck Inc
        </h5>
        <p
          className="text-gray-700 font-semibold text-xs text-left leading-normal"
          style={{ fontSize: "9px" }}
        >
          Send Money
        </p>
        <h5
          className="text-2xl font-semibold mt-1 xl:mt-3"
          style={{ color: "#0b254a" }}
        >
          7854 USD
        </h5>
        <p
          className="text-gray-600 font-semibold text-xs mt-1 xl:mt-2 text-left xl:leading-normal"
          style={{ fontSize: "9px" }}
        >
          Starbuck - Caramet Latte Grande &
        </p>
        <p
          className="text-gray-600 font-semibold text-xs xl:my-1 text-left xl:leading-normal"
          style={{ fontSize: "9px" }}
        >
          Espresso Macchiato Grande
        </p>
      </div>


      <div className="p-4">
        <h5
          className="text-sm my-1 font-semibold text-left"
          style={{ color: "#0b254a", fontSize: '10px' }}
        >
          Transaction Details
        </h5>
        
        <div className="flex justify-between items-center my-1 xl:my-3">
          <h5 className="text-gray-500 text-xs font-normal xl:font-semibold text-left">
            Date
          </h5>
          <h5 className="text-gray-500 text-xs font-normal xl:font-semibold text-right">
            15 Aug 2022 - 08.20
          </h5>
        </div>

        <div className="flex justify-between items-center my-1 xl:my-3">
          <h5 className="text-gray-500 text-xs font-normal xl:font-semibold text-left">
            Category
          </h5>
          <h5 className="text-gray-500 text-xs font-normal xl:font-semibold text-right">
            Food & Beverage
          </h5>
        </div>

        <div className="flex justify-between items-center my-1 xl:my-3">
          <h5 className="text-gray-500 text-xs font-normal xl:font-semibold text-left">
            Transaction ID
          </h5>
          <h5 className="text-gray-500 text-xs font-normal xl:font-semibold text-right">
            #38838929
          </h5>
        </div>

        <div className="flex justify-between items-center my-1 xl:my-3">
          <div className="flex justify-start items-center space-x-2 mt-2">
            <img className="w-6 h-4" src={`/images/tab-atm-master-card.jpg`} />
            <h5 className="text-gray-500 text-xs font-semibold text-left">
              Mastercard
            </h5>
          </div>
          <h5 className="text-gray-500 text-xs font-semibold text-right">
            ****5213
          </h5>
        </div>
        <button className='w-full h-10 xl:h-12 mt-2 xl:mt-4 rounded-xl' style={{background: "#154ea5"}}>
          <div className='flex justify-center items-center text-xs font-normal text-white'>
              <p>Easypay Bill </p>
          </div>
         </button>
      </div>
    </div>
  );
};

export default BillView;
