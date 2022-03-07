import React from "react";

const AtmCard = () => {
  return (
    <div className="border w-1/2 h-48 xl:h-56 rounded-lg p-6">
      <div className="flex justify-between items-center mb-2 xl:mb-5">
        <div>
          <img className="w-10 h-8 mr-3" src={`/images/tab-atm-card.jpg`} />
        </div>
        <div>
          <img className="w-3 h-6" src={`/images/tab-atm-wifi.jpg`} />
        </div>
      </div>


      <div className="flex justify-between items-center">
        <div>
          <h5 className="text-gray-500 text-xs font-semibold text-left">
            Name
          </h5>
          <p className="text-black font-bold text-xs text-left">Okechukwu Obi</p>
        </div>
        <div>
          <h5 className="text-gray-500 text-xs font-semibold text-right">
            Number
          </h5>
          <p className="text-black text-xs truncate text-right">**** **** 4826</p>
        </div>
      </div>


      <div className="flex justify-between items-center mt-4 xl:mt-10">
        <div>
          <h5 className="text-xl font-semibold text-left" style={{color: '#0b254a'}}>
            $ 452,841
          </h5>
          <p className="text-gray-300 font-bold text-xs text-left" style={{fontSize: '8px'}}>Balance</p>
        </div>
        <div>
          <div className="flex justify-end">
             <img className="w-8 h-5" src={`/images/tab-atm-master-card.jpg`} />
          </div>
          <p className="text-gray-300 text-xs truncate text-right" style={{fontSize: '8px'}}>Mastercard</p>
        </div>
      </div>

    </div>
  );
};

export default AtmCard;
