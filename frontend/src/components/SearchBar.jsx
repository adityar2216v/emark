import { useContext,useEffect,useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setshowSearch } = useContext(ShopContext);
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/collection' ) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className={`sticky top-12 flex justify-center items-center border-t border-b  text-center mt-12 ${showSearch ? 'block' : 'hidden'} bg-gray-300 bg-opacity-20 backdrop-filter backdrop-blur-md z-30 shadow-md`}>
      <div className="inline-flex items-center border border-gray-800 px-5 py-2 my-2 mx-3 mt-5 rounded-full w-3/4 sm:w-1/2">
        <input 
          type="text" 
          placeholder='Search' 
          className='outline-none bg-transparent w-full' 
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={assets.search_icon} alt="search" className='w-4 cursor-pointer' />
      </div>
      <img src={assets.cross_icon} alt="close" className='w-4 sm:w-5 mt-3 cursor-pointer' onClick={() => setshowSearch(false)} />
    </div>  
  ) : null;
}

export default SearchBar;
