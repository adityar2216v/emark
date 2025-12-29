import { assets } from '../assets/frontend_assets/assets.js'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';

const Hero = () => {
  const { showSearch } = useContext(ShopContext);
  return (
    <div className={`flex flex-col sm:flex-row border border-gray-400 ${showSearch ? 'mt-6' : 'mt-20'}`}>
      {/* left */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 '>
        <div className='text-[#414141] '>
          <div className='flex items-center gap-2 '>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className='font-mediumtext-sm md:text-base'>OUR BESTSELLERS</p>
          </div>
          <h1 className='flex items-center gap-2 font-bold text-2xl md:text-5xl prata-regular'>Latest Arraivals</h1>
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold md:text-base">Shop Now</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>          
          </div>
        </div>
      </div>
      {/* right */}
      <img src={assets.hero_img} className='w-full sm:w-1/2' />
    </div>
  )
}

export default Hero
