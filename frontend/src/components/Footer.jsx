import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
      <hr className='border-gray-300 my-10' />
      <div className="sm:grid grid-cols-[3fr_1fr_1fr] gap-16 my-40 mt-40 text-sm mx-10 sm:mx-0">
        <div className='my-6'>
            <img src={assets.logo} className='w-20 -ml-2' />
            <p className="w-full text-lg font-semibold">At WebMarket, we're dedicated to providing you with the best online shopping experience. From our wide range of products to our customer-first approach, we strive to meet all your needs with quality, affordability, and convenience. Thank you for choosing us!
            </p>

        </div>
        <div className='my-6'>
            <h1 className="font-bold text-3xl mb-4">Company</h1>
            <ul>
                <li className="m1 cursor-pointer text-gray-600 text-2xl hover:text-gray-900 font-semibold hover:scale-105 transition-all ease-in-outt">About Us</li>
                <li className="m1 cursor-pointer text-gray-600 text-2xl hover:text-gray-900 font-semibold hover:scale-105 transition-all ease-in-outt">Careers</li>
                <li className="m1 cursor-pointer text-gray-600 text-2xl hover:text-gray-900 font-semibold hover:scale-105 transition-all ease-in-outt">Blog</li>
                <li className="m1 cursor-pointer text-gray-600 text-2xl hover:text-gray-900 font-semibold hover:scale-105 transition-all ease-in-outt">Contact Us</li>
            </ul>
        </div>

        <div className='my-6'>
            <h1 className="font-bold text-3xl mb-4">GET IN TOUCH</h1>
            
            <p className=" text-gray-600 text-[18px] hover:text-gray-900 font-semibold py-2">Phone: +1-123-456-7890</p>
            <p className=" text-gray-600 text-[18px] hover:text-gray-900 font-semibold py-2">Email: 0h5Xh@example.com</p>
            <p className=" text-gray-600 text-[18px] hover:text-gray-900 font-semibold py-2">Address: 123 Main St, Anytown USA</p>

        </div>        
      </div>
      <hr />
      <div className="text-center text-gray-600 text-[16px] pb-10">Copyright © 2023 WebMarket. All rights reserved.</div>

    </div>
  )
}

export default Footer