import { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title.jsx';
import ProductItem from './ProductItem.jsx'; // Import ProductItem

const BestSellers = () => {
  const { products } = useContext(ShopContext);

  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    // Filtering products to get only the bestsellers
    const bestProduct = products.filter(item => item.bestseller === true);
    setBestSellers(bestProduct.slice(0, 5)); // Displaying the top 5 bestsellers
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover Our Best Selling Products
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSellers.map((item) => (
          <ProductItem key={item._id} id={item._id} image={item.image[0]} name={item.name} price={item.price} />
        ))} 
      </div>
    </div>
  );
}

export default BestSellers;
