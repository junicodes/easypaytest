

import React, { useState } from 'react';
import styles from './styles/Top.module.css'
import { HiChevronDown } from "react-icons/hi";

const Top = () => {
  const [mobile, setMobile] = useState(false)


  return (
    <div className={`${styles.container} h-24 w-full flex justify-between items-center relative`}>
      <div className='flex items-center justify-start'>
        <img className='w-24 xl:w-36' src='/images/easy_paylogo.jpeg' />
      </div>


      <nav className="sm:justify-center space-x-4 ml-8 md:flex hidden">
        {[
          ['Customer', '/customers', 'isDropDown=no'],
          ['Features', '/feature', 'isDropDown=yes'],
          ['Partners', '/partners', 'isDropDown=no'],
          ['Resources', '/resources', 'isDropDown=yes'],
        ].map(([title, url, isDropDown]) => (
          <a key={title} href={url} className="rounded-lg text-xs xl:text-lg xl:px-3 py-2 text-slate-500 font-medium hover:text-slate-900 flex justify-between">
            <span>{title}</span>
            {
              isDropDown === 'isDropDown=yes' &&
              <p className='flex items-center text-xs xl:text-xl'><HiChevronDown /></p>
            }
          </a>
        ))}
      </nav>

      <div className='md:flex hidden'>
        <div className='w-full flex justify-between'>
          <button className={`${styles.loginBtn} w-20 h-10 xl:w-32 xl:h-14 text-xs xl:text-lg rounded-md text-center text-slate-500`}>
            Login
          </button>
          <button className={`${styles.registerBtn} w-20 h-10 xl:w-32 xl:h-14 text-xs xl:text-lg rounded-md text-white text-center`}>
            Register
          </button>
        </div>
      </div>

      <div onClick={() => setMobile(!mobile)} className="md:hidden flex items-center">
          <button className="outline-none mobile-menu-button">
          <svg className=" w-6 h-6 text-gray-500 hover:text-blue-900 "
            x-show="!showMenu"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
     {
       mobile &&
        <div className='absolute md:hidden bg-white w-full top-16 h-auto p-8'>

        <nav className="flex justify-center flex-col items-center mb-5">
          {[
            ['Customer', '/customers', 'isDropDown=no'],
            ['Features', '/feature', 'isDropDown=yes'],
            ['Partners', '/partners', 'isDropDown=no'],
            ['Resources', '/resources', 'isDropDown=yes'],
          ].map(([title, url, isDropDown]) => (
            <a key={title} href={url} className="rounded-lg text-sm md:text-xs xl:text-lg xl:px-3 py-5 text-slate-500 font-medium hover:text-slate-900 flex justify-start">
              <span>{title}</span>
              {
                isDropDown === 'isDropDown=yes' &&
                <p className='flex items-center text-xs xl:text-xl'><HiChevronDown /></p>
              }
            </a>
          ))}
        </nav>

        <div className=''>
          <div className='w-full flex justify-center space-x-2'>
            <button style={{background: 'white', border: '1px solid #7162b7'}} className={`${styles.loginBtn} w-32 md:w-20 h-10 xl:w-32 xl:h-14 text-xs xl:text-lg rounded-md text-center text-slate-500`}>
              Login
            </button>
            <button className={`${styles.registerBtn} w-32 md:w-20 h-10 xl:w-32 xl:h-14 text-xs xl:text-lg rounded-md text-white text-center`}>
              Register
            </button>
          </div>
        </div>
      </div>
     }
    </div>
  )
}

export default Top