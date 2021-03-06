
import React from 'react'
import { BiWifi0, BiChevronRight } from "react-icons/bi";
import styles from './styles/Body.module.css'

const Company = () => {
  return (
    <div className={`${styles.companyContainer} w-full`}>
        <h3 className='text-center pt-24 md:pt-14 pb-8 text-gray-400 text-2xl'>THEY TRUST EASYPAY</h3>
        <nav className="flex flex-col md:flex-row sm:justify-center space-y-10 md:space-y-0 md:space-x-2 lg:space-x-10 lg:px-20 xl:px-40 2xl:px-56">
            {[
            ['company-one.jpg', ''],
            ['company-two.jpg', ''],
            ['company-three.jpg', ''],
            ['company-four.jpg', ''],
            ['company-five.jpg', ''],
            ['company-six.jpg', ''],
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

// ['company-one.jpg', 'xl:w-10 xl:h-16'],
// ['company-two.jpg', 'xl:w-42 xl:h-8'],
// ['company-three.jpg', 'w-52 h-8'],
// ['company-four.jpg', 'w-48 h-8'],
// ['company-five.jpg', 'w-42 h-8'],
// ['company-six.jpg', 'w-20 h-8'],