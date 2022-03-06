

import React from 'react'
import Company from './Company'
import Showcase from './Showcase/Showcase'
import styles from './styles/Body.module.css'
import TabView from './TabView/TabView'
import ToolConnect from './ToolConnect'

const Body = () => {
  return (
    <div className='container mx-auto px-10'>
        <Company />
        <TabView />
        <Showcase />
        <div className='w-11/12 mx-auto h-64 flex justify-between item-center p-14 px-20 mb-40 rounded-lg'  style={{background: '#0e3d83'}}>
            <div>
                <h1 className='text-white font-semibold mb-3' style={{fontSize: '52px'}}>Let's try our service now!</h1>
                <p className='text-white text-xl'>Easy to use API that allow you to get up and running with <br></br>
                    a powerful payments infrastucture in nder five minutes.
                </p>
            </div>
            <div>
                <button
                  className={`btn w-40 h-12 mt-14 rounded-sm border text-center text-black bg-white text-sm font-semibold`}
                  >
                  Learn More
                </button>
            </div>
        </div>
        <ToolConnect />
    </div>
  )
}

export default Body