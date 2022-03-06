

import React from 'react'
import Top from './Top'
import styles from './styles/Header.module.css'
import HeroText from './HeroText'
import HeroCard from './HeroCard'


const Header = () => {
  return (
    <div className={`${styles.container} 3xl:container 3xl:mx-auto`}>
        <div className='container mx-auto xl:px-10'>
          <Top />
          <div className={`${styles.heroView} flex justify-center`}>
            <div className='w-1/2 flex justify-center items-center'>
              <HeroText />
            </div>
            <div className='w-1/2 flex justify-center items-center'>
              <HeroCard />
            </div>
          </div>

        </div>
    </div>
  )
}

export default Header