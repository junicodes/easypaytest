import React from "react";

const TabOneSidebar = () => {

  const tabList = [
      ['Home', 'tab-home.jpg', []],
      ['Company', 'tab-company.jpg', []],
      ['Payment', 'tab-payment.jpg', []],
      ['Client', 'tab-clients.jpg', []],
      ['Settings', 'tab-setting.jpg', ['Invoices', 'Methods', 'Bills', 'Dashboard']],
      ['Notifications', 'tab-notification.jpg', []],
  ]

  return (
    <>
      <div className="containerSide rounded-tl-2xl rounded-bl-2xl relative">
        <div className="header flex justify-start px-5 xl:px-10 h-20 items-center rounded-tl-2xl">
           <img className="w-6 h-6 mr-1 lg:mr-3" src="/images/tab-equity-logo.jpg" />
           <img className="w-16 lg:w-20 h-5 lg:h-6" src="/images/easypay-logo-blue.jpg" />
        </div>
        <div className="pt-6">
            {
                tabList.map(([title, image, sublist]) => (
                    <div key={title} className={`${title === 'Settings' && 'mt-16 xl:mt-20' }`}>
                        <div className={`flex justify-start px-5 items-center h-10 xl:h-12 ${title === 'Settings' && 'highligted border-l-4' }`}>
                            <img className="w-5 h-5 mr-3" src={`/images/${image}`} />
                            <p className="text-white text-xs">{title}</p>
                        </div>
                        {
                            sublist.length > 0 && sublist.map((x, index) => (
                                <div key={index} className="ml-4 px-5 h-10 xl:h-12">
                                    <div className="items-center py-3 px-4">
                                        <p className="text-white text-xs">{x}</p>
                                    </div>
                                </div>
                            ))
                            
                        }
                    </div>
                ))
            }
        </div>
        <div className="absolute w-full h-20 bottom-0">
            <div className="m-3 bg-white h-14 rounded-md flex justify-center space-x-2 items-center">
                <img className="rounded-full border border-gray-100 shadow-sm w-8 h-8" src="https://randomuser.me/api/portraits/men/61.jpg" alt="user image" />
                <div>
                   <h5 className="text-gray-500 text-xs font-semibold truncate">Okechukwu Obi</h5>
                   <p className="text-gray-500 text-xs truncate">obi@teamapt.com</p>
                </div>
            </div>
        </div>
      </div>

      <style jsx>{`
        .containerSide {
            background: #1d62ca;
            height: 100%;
        }
        .header {
            background: #154ea5;
        }
        .highligted {
            background: #4a81d4;
        }
      `}</style>
    </>
  );
};

export default TabOneSidebar;
