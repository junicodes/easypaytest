import React from "react";
import styles from "./styles/Header.module.css";

const HeroText = () => {
  return (
      <div className="w-full 3xl:w-3/4 mt-40">
        <h1 className={`${styles.heroTextH1} text-2xl`}>
          The new standard in <br></br> spend management
        </h1>
        <p className="text-xl pr-52 mt-8 text-gray-600">
          Easypay settles your open invoices immediately and takes over your
          accounts receivable - for optimal cash and workflow.
        </p>
        <div className="w-full flex justify-start mt-10">
          <button
            className={`${styles.onlineBtn} w-48 h-14 rounded-md mr-2 text-center text-white font-semibold`}
          >
            For online stores
          </button>
          <button
            className={`${styles.smeBtn} w-48 h-14 rounded-md ml-2 border text-center text-slate-700 font-semibold`}
          >
            For SMEs
          </button>
        </div>
      </div>
  );
};

export default HeroText;
