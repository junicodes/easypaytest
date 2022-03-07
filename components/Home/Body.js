

import React from 'react'
import Company from './Company'
import Showcase from './Showcase/Showcase'
import styles from './styles/Body.module.css'
import TabView from './TabView/TabView'
import ToolConnect from './ToolConnect'
import { useMediaQuery } from 'react-responsive'

const Body = () => {
    const isTab = useMediaQuery({
        query: '(max-width: 1450px)'
    })

  return (
    <div className='xl:container mx-auto px-10'>
        <Company />
        <TabView />
        <Showcase />
        <div className='w-full md:w-11/12 mx-auto h-64 flex flex-col md:flex-row justify-center md:justify-between item-center p-14 px-10 2xl:px-20 mb-20 md:mb-40 rounded-lg'  style={{background: '#0e3d83'}}>
            <div className='w-full md:w-3/4'>
                <h1 className='text-white text-center md:text-left font-semibold mb-3 headFont'>Let&apos;s try our service now!</h1>
                <p className='text-white text-center md:text-left text-xs md:text-sm xl:text-xl'>Easy to use API that allow you to get up and running with <br></br>
                    a powerful payments infrastucture in nder five minutes.
                </p>
            </div>
            <div className='w-full md:w-1/4 flex justify-center'>
                <button
                  className={`btn w-40 h-10 md:h-12 mt-14 rounded-sm border text-center text-black bg-white text-sm font-semibold`}
                  >
                  Learn More
                </button>
            </div>
        </div>
        <ToolConnect />
        <style jsx>{`
            .headFont {
                font-size: 52px;
            }
            @media screen and (max-width: 1200px) {  
                .headFont {
                    font-size: 36px;
                }
            }
            @media screen and (max-width: 767px) {  
                .headFont {
                    font-size: 32px;
                }
            }
            @media screen and (max-width: 500px) {  
                .headFont {
                    font-size: 24px;
                }
            }
        `}</style>
    </div>
  )
}

export default Body