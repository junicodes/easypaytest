import React, { useState } from "react";
import { BiWifi0, BiChevronRight } from "react-icons/bi";
import styles from "../styles/Body.module.css";

const TabNav = ({ onHandleTabView }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabSelect = (tab) => {
    setCurrentTab(tab);
    return onHandleTabView(tab);
  };

  return (
    <div
      className={`${styles.tabNav} flex justify-center w-1/2 mx-auto items-center`}
    >
      <div
        onClick={() => handleTabSelect(0)}
        className={`${
          currentTab === 0 ? styles.tabSelected : "bg-white"
        } w-1/3 h-12 flex justify-center items-center cursor-pointer`}
      >
        <img className="w-6 h-6 mr-2" src="/images/tab-one.jpg" />
        <p>Secure Liquidity</p>
      </div>
      <div
        onClick={() => handleTabSelect(1)}
        className={`${
          currentTab === 1 ? styles.tabSelected : "bg-white"
        } w-1/3 h-12  flex justify-center items-center cursor-pointer`}
      >
        <img className="w-6 h-6 mr-2" src="/images/tab-two.jpg" />
        <p>Digital Payment</p>
      </div>
      <div
        onClick={() => handleTabSelect(2)}
        className={`${
          currentTab === 2 ? styles.tabSelected : "bg-white"
        } w-1/3 h-12  flex justify-center items-center cursor-pointer`}
      >
        <img className="w-6 h-6 mr-2" src="/images/tab-three.jpg" />
        <p>Automated Process</p>
      </div>
    </div>
  );
};

export default TabNav;
