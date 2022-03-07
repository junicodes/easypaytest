import React from "react";
import styles from "./styles/Body.module.css";
import Background from '../../public/images/junicodes_official_cut.png'

const ToolConnect = () => {
  return (
    <>
      <div className="relative">
        <h1
          className={`${styles.heroText} text-center`}
          style={{ fontSize: "32px" }}
        >
          Connect to your exisitng tools
        </h1>
        <p className="text-lg text-center mt-8 mb-5 text-gray-400 leading-normal">
          Upflow seamlessly integrationith the way you work today. Keep your
          exisitng<br></br>
          invoicing and accounting tools and leverage the power of Upflow within
          a few minutes. <br></br> paid.
        </p>
        <div className="flex justify-center items-center my-14 space-x-2">
          <p className="text-md" style={{ color: "#5d95ea" }}>
            Discover our API
          </p>
          <img className="w-4 h-3" src={`/images/blue-arrow.jpg`} />
        </div>
        <div className="alpha w-full overflow-hidden border-b relative mb-28 border-gray-400">
          <div className="h-full connectBlock w-full flex justify-center items-center">
            <div className="firstRound mx-auto border border-gray-400 rounded-full absolute">
                <div className="rounded-full bg-white shadow-2xl shadow-gray-200 w-20 h-20 flex justify-center items-center absolute top-40 left-0">
                   <img className="w-16 h-5" src="/images/connect-visa.jpg" alt="user image" />
                </div>
                <div className="rounded-full bg-white shadow-2xl shadow-gray-200 w-24 h-24 flex justify-center items-center absolute top-20 right-14">
                   <img className="w-10 h-3" src="/images/connect-paypal.jpg" alt="user image" />
                </div>
            </div>
            <div className="secRound mx-auto border border-gray-400 rounded-full absolute">
                <div className="rounded-full bg-white shadow-2xl shadow-gray-200 w-24 h-24 flex justify-center items-center absolute -top-2 left-24">
                   <img className="w-8 h-8" src="/images/connect-america-express.jpg" alt="user image" />
                </div>
                <div className="rounded-full bg-white shadow-2xl shadow-gray-200 w-20 h-20 flex justify-center items-center absolute -top-4 right-36">
                   <img className="w-6 h-8" src="/images/connect-amazon.jpg" alt="user image" />
                </div>
            </div>
            <div className="thrdRound mx-auto border border-gray-400 rounded-full absolute">
                <div className="rounded-full bg-white shadow-2xl shadow-gray-200 w-20 h-20 flex justify-center items-center absolute top-10 left-5">
                   <img className="w-8 h-8" src="/images/connect-square.jpg" alt="user image" />
                </div>
                <div className="rounded-full bg-white shadow-2xl shadow-gray-200 w-20 h-20 flex justify-center items-center absolute -top-8 left-52">
                   <img className="w-12 h-5" src="/images/connect-gpay.jpg" alt="user image" />
                </div>
            </div>
            <div className="fortRound mx-auto border border-gray-400 rounded-full absolute">
                <div className="rounded-full bg-white shadow-2xl shadow-gray-200 w-20 h-20 flex justify-center items-center absolute -top-2 right-5">
                   <img className="w-10 h-5" src="/images/connect-apple.jpg" alt="user image" />
                </div>
            </div>
            <div className="fifthRound mx-auto border border-gray-400 rounded-full absolute">
                <div className="rounded-full bg-white shadow-2xl shadow-gray-200 w-28 h-28 flex justify-center items-center absolute -top-8 -left-3">
                   <img className="w-16 h-10" src="/images/connect-master-card.jpg" alt="user image" />
                </div>
            </div>
          </div>
        </div>
        <div className="blueBg w-full flex justify-between border p-24">
          <div className="w-1/2">
            <h1 className="text-2xl text-white mb-5">PEOPLE MATTER, NOT PAPER</h1>
            <h1 className="text-white note">
              "Upflow had a drastic impact <br></br>
               on our cash collection strategy <br></br>
               at Front and makes it easy to <br></br>
               reach all of our customers, <br></br> 
               whether they&apos;re an SMB or <br></br>
                Enterprise!"
            </h1>
          </div>
          <div className="w-1/2 flex justify-center relative">
                <div className="image w-96" style={{
                    backgroundImage: `url("/images/junicodes_official_cut.png")`,
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                }}>

                </div>
                {/* <div className=" border image w-96 h-full flex justify-center align-middle absolute z-10">
                    <span className="mx-auto z-30 w-72 h-72 border border-gray-300 rounded-full absolute"></span>
                </div> */}
          </div>
        </div>
      </div>

      <style jsx>{`
        .alpha {
          height: 420px;
        }
        .connectBlock {
          height: 800px;
        }
        .firstRound {
          width: 800px;
          height: 800px;
        }
        .secRound {
          width: 650px;
          height: 650px;
        }
        .thrdRound {
          width: 500px;
          height: 500px;
        }
        .fortRound {
          width: 350px;
          height: 350px;
        }
        .fifthRound {
          width: 200px;
          height: 200px;
        }
        .coverDiv {
          height: 400px;
        }
        .blueBg {
          height: 600px;
          background: #1d62ca;
        }
        .blueBg .note {
            font-size: 32px;
        }
        .blueBg .image {
            height: 450px
        }
      `}</style>
    </>
  );
};

export default ToolConnect;
