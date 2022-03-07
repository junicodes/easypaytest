

import React, { useState, useCallback } from 'react'
import TabNav from './TabNav';
import { BiWifi0, BiChevronRight } from "react-icons/bi";
import styles from '../styles/Body.module.css'
import TabOne from './TabOne';
import TabTwo from './TabTwo';
import TabThree from './TabThree';

const TabView = () => {
  const [tab, setTab] = useState(0);

  const handleTabView = useCallback((tab) => setTab(tab), [tab])
  
  return (
    <div className={`${styles.tabBlock}`}>
        <h1 className={`${styles.heroText} text-center`}>
          Experience Easypay
        </h1>
        <p className="text-sm sm:text-xl text-center mt-4 mb-12 text-gray-600">
          Discover Upflow through our Virtual Product Tour
        </p>
       <TabNav onHandleTabView={handleTabView} />
       <div className={`${styles.tabDisplay} border w-full 3xl:w-5/6 mx-auto mt-8 rounded-2xl`}>
         {
             tab === 0 && <TabOne />
         }
         {
             tab === 1 && <TabTwo />
         }
         {
             tab === 2 && <TabThree />
         }
       </div>
    </div>
  )
}

export default TabView