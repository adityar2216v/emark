import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';
import { Link } from 'react-router-dom';

const RelatedProducts = ({ category, subCategory }) => { 
  const { products } = useContext(ShopContext); 
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      const filteredProducts = products.filter(
        (product) => 
          product.category === category || product.subCategory === subCategory
      );
      // Limit the number of related products to 5
      setRelatedProducts(filteredProducts.slice(0, 5));
    }
  }, [category, subCategory, products]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
        {relatedProducts.length > 0 ? (
          relatedProducts.map((product) => (
            <Link key={product._id} to={`/product/${product._id}`}>
              <div className="border  rounded-lg">
                <img src={product.image} alt={product.name} className="w-full mb-2" />
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-black font-bold text-xl mb-4">${product.price}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>No related products found</p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
