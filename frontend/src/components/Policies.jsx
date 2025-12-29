import React from 'react'
import { assets } from '../assets/frontend_assets/assets.js'

const Policies = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        
      <div className='hover:scale-110 transition-all ease-in-out'>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5 ' />
        <p className="font-semibold">Easy Exchange Policy </p>
        <p className='text-gray-500'>We offer hassle free exchanges</p>
      </div>

      <div className='hover:scale-110 transition-all ease-in-out'>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5 ' />
        <p className="font-semibold">Easy Exchange Policy </p>
        <p className='text-gray-500'>We offer hassle free 7 days returns</p>
      </div>

      <div className='hover:scale-110 transition-all ease-in-out'>
        <img src={assets.support_img} className='w-12 m-auto mb-5 ' />
        <p className="font-semibold">Best customer support </p>
        <p className='text-gray-500'>We offer 24/7 customer support</p>
      </div>

    </div>
  )
}

export default Policies
