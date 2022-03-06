
import React from 'react'
import { BiWifi0, BiChevronRight } from "react-icons/bi";
import styles from './styles/Body.module.css'

const Company = () => {
  return (
    <div className={`${styles.companyContainer} w-full`}>
        <h3 className='text-center pt-14 pb-8 text-gray-400 text-2xl'>THEY TRUST EASYPAY</h3>
        <nav className="flex sm:justify-center space-x-10">
            {[
            ['company-one.jpg', 'w-10 h-16'],
            ['company-two.jpg', 'w-42 h-8'],
            ['company-three.jpg', 'w-52 h-8'],
            ['company-four.jpg', 'w-48 h-8'],
            ['company-five.jpg', 'w-42 h-8'],
            ['company-six.jpg', 'w-20 h-8'],
            ].map(([url, dimension]) => (
                <div key={url} className=' flex justify-center items-center'>
                    <img className={`${dimension}`} src={`/images/${url}`} />
                </div>
            ))}
        </nav>
    </div>
  )
}

export default Company