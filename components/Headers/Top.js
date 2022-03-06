

import React from 'react';
import styles from './styles/Top.module.css'
import { HiChevronDown } from "react-icons/hi";

const Top = () => {
  return (
    <div className={`${styles.container} h-24 w-full flex justify-between items-center`}>
      <div className='flex items-center justify-start'>
        <img className='w-36' src='/images/easy_paylogo.jpeg' />
      </div>
      <nav className="flex sm:justify-center space-x-4 ml-8">
        {[
          ['Customer', '/customers', 'isDropDown=no'],
          ['Features', '/feature', 'isDropDown=yes'],
          ['Partners', '/partners', 'isDropDown=no'],
          ['Resources', '/resources', 'isDropDown=yes'],
        ].map(([title, url, isDropDown]) => (
          <a key={title} href={url} className="rounded-lg px-3 py-2 text-slate-500 font-medium hover:text-slate-900 flex justify-between">
            <span>{title}</span>
            {
              isDropDown === 'isDropDown=yes' &&
              <p className='flex items-center text-xl'><HiChevronDown /></p>
            }
          </a>
        ))}
      </nav>
      <div className=''>
        <div className='w-full flex justify-between'>
          <button className={`${styles.loginBtn} w-32 h-14 rounded-md text-center text-slate-500`}>
            Login
          </button>
          <button className={`${styles.registerBtn} w-32 h-14 rounded-md text-white text-center`}>
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default Top