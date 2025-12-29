import { useState, useContext } from 'react';
import { assets } from '../assets/frontend_assets/assets.js';
import { NavLink, Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext'; // Import the ShopContext


const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setshowSearch, getCartCount } = useContext(ShopContext); // Extract setshowSearch from context

  return (
    <div className='z-40 fixed flex items-center top-0 py-0 font-medium inset-x-0 justify-between bg-gray-800 bg-opacity-20 px-3 md:px-16 backdrop-filter backdrop-blur-lg mb-12 '>
      <Link to={"/"}>
        <img src={assets.logo} alt="" className='w-20 mr-2' />
      </Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to={"/"} className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to={"/collection"} className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to={"/about"} className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to={"/contact"} className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        {/* Trigger search bar visibility */}
        <img src={assets.search_icon} className='w-5 cursor-pointer' onClick={() => setshowSearch(true)} />
        <div className="group relative">
          <img src={assets.profile_icon} className='w-5 cursor-pointer' />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4  ">
            <div className="w-24 flex flex-col gap-2 py-3 px-2 items-center bg-slate-100 text-gray-500 rounded">
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>

        <Link to={"/cart"} className='relative'>
          <img src={assets.cart_icon} className='w-6 cursor-pointer min-w-6 lg:mr-10' />
          <p className="absolute  bottom-[-5px] w-4 text-center bg-black text-white aspect-square rounded-full text-[10px] font-bold mr-10">{getCartCount()}</p>
        </Link>

        {/* Mobile Hamburger Menu */}
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden mr-2' />
      </div>

      {/* Sidebar Menu for Mobile */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full h-screen" : "w-0"} `}>
        <div className="flex flex-col text-gray-600">
          <div className='flex items-center gap-4 m-3'>
            <img onClick={() => setVisible(false)} src={assets.dropdown_icon} className='h-4 rotate-180' />
            <p className="cursor-pointer">Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} to={"/"} className={" h-10 border-b text-center pt-2"}>HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} to={"/collection"} className={"text-center h-10 border-b pt-2"}>COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} to={"/about"} className={"text-center h-10 border-b pt-2"}>ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} to={"/contact"} className={"text-center h-10 border-b pt-2"}>CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
