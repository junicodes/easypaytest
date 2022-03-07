import React from "react";
import styles from "./styles/Header.module.css";

const HeroText = () => {
  return (
      <div className="w-full 3xl:w-3/4 mt-10 xl:mt-40">
        <h1 className={`${styles.heroTextH1} xl:text-2xl text-center md:text-left `}>
          The new standard in <br></br> spend management
        </h1>
        <p className="text-center md:text-left text-sm md:text-sm xl:text-xl sm:px-20 md:pl-0 md:pr-40 lg:pr-52 mt-8 text-gray-600">
          Easypay settles your open invoices immediately and takes over your
          accounts receivable - for optimal cash and workflow.
        </p>
        <div className="w-full flex justify-center md:justify-start mt-10">
          <button
            className={`${styles.onlineBtn} w-32 h-10 sm:w-36 sm:h-12 lg:w-48 lg:h-14 rounded-md text-xs sm:text-sm lg:text-lg mr-2 text-center text-white font-semibold`}
          >
            For online stores
          </button>
          <button
            className={`${styles.smeBtn} w-32 h-10 sm:w-36 sm:h-12 lg:w-48 lg:h-14 rounded-md text-xs sm:text-sm lg:text-lg ml-2 border text-center text-slate-700 font-semibold`}
          >
            For SMEs
          </button>
        </div>
      </div>
  );
};

export default HeroText;
