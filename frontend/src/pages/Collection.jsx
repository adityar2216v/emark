import { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';
import { assets } from '../assets/frontend_assets/assets.js';
import Title from '../components/Title.jsx';
import ProductItem from '../components/ProductItem.jsx';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [catagory, setCatagory] = useState([]);
  const [subCatagory, setSubCatagory] = useState([]);

  const filterByCatagory = (e) => {
    if (catagory.includes(e.target.value)) {
      setCatagory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCatagory((prev) => [...prev, e.target.value]);
    }
  };

  const filterBySubCatagory = (e) => {
    if (subCatagory.includes(e.target.value)) {
      setSubCatagory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCatagory((prev) => [...prev, e.target.value]);
    }
  };

  const handleSort = (e) => {
    const sorted = [...filterProducts].sort((a, b) => {
      if (e.target.value === 'low-high') return a.price - b.price;
      if (e.target.value === 'high-low') return b.price - a.price;
      return 0;
    });
    setFilterProducts(sorted);
  };

  useEffect(() => {
    let filtered = products;

    if (catagory.length > 0) {
      filtered = filtered.filter((product) => catagory.includes(product.category));
    }

    if (subCatagory.length > 0) {
      filtered = filtered.filter((product) => subCatagory.includes(product.subCategory));
    }

    // Add search filtering
    if (search.trim() !== '') {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower) ||
        product.subCategory.toLowerCase().includes(searchLower)
      );
    }

    setFilterProducts(filtered);
  }, [catagory, subCatagory, products, search]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-20 border-t'>
      {/* filter options */}
      <div className='min-w-60'>
        <p className="my-2 text-xl flex items-center gap-2 cursor-pointer font-semibold">
          FILTERS
          <img src={assets.dropdown_icon} className={`h-3 w-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} onClick={() => setShowFilter(!showFilter)} />
        </p>

        {/* category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='text-gray-500 mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm text-gray-700 font-semibold justify-center">
            <p className="flex gap-2 items-center">
              <input type="checkbox" value={'Men'} onChange={filterByCatagory} className='w-3 h-3 ' />Men
            </p>
            <p className="flex gap-2 items-center">
              <input type="checkbox" value={'Women'} onChange={filterByCatagory} className='w-3 h-3 ' />Women
            </p>
            <p className="flex gap-2 items-center">
              <input type="checkbox" value={'Kids'} onChange={filterByCatagory} className='w-3 h-3 ' />Kids
            </p>
          </div>
        </div>

        {/* subCategory filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='text-gray-500 mb-3 text-sm font-medium'>TYPE</p>
          <div className="flex flex-col gap-2 text-sm text-gray-700 font-semibold justify-center">
            <p className="flex gap-2 items-center">
              <input type="checkbox" value={'Topwear'} className='w-3 h-3 ' onChange={filterBySubCatagory} />Topwear
            </p>
            <p className="flex gap-2 items-center">
              <input type="checkbox" value={'Bottomwear'} className='w-3 h-3 ' onChange={filterBySubCatagory} />Bottomwear
            </p>
            <p className="flex gap-2 items-center">
              <input type="checkbox" value={'Winterwear'} className='w-3 h-3 ' onChange={filterBySubCatagory} />Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-xs sm:text-2xl mb-4 mx-8'>
          <Title text1={'COLLECTION'} text2={'TRENDING'} />
          {/* product sort */}
          <select className='border border-gray-300 px-1 sm:px-3 text-xs sm:text-sm rounded-sm' onChange={handleSort}>
            <option value="relavent">Sort by : Relevant</option>
            <option value="low-high">Sort by : Low to High</option>
            <option value="high-low">Sort by : High to Low</option>
          </select>
        </div>

        {/* map products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
          {filterProducts.map((item, index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
