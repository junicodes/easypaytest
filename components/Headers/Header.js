

import React from 'react'
import Top from './Top'
import styles from './styles/Header.module.css'
import HeroText from './HeroText'
import HeroCard from './HeroCard'


const Header = () => {
  return (
    <div className={`${styles.appHolder} 3xl:container 3xl:mx-auto`}>
        <div className='xl:container mx-auto px-6 xl:px-10'>
          <Top />
          <div className={`${styles.heroView} flex justify-center`}>
            <div className='w-full md:flex justify-center items-center'>
              <HeroText />
            </div>
            <div className='hidden md:flex sm:w-1/2 justify-end xl:justify-center items-center'>
              <HeroCard />
            </div>
          </div>

        </div>
    </div>
  )
}

export default Header