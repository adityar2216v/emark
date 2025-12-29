import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img src={image} alt={name} className="hover:scale-110 transition-all ease-in-out rounded-lg" />
      </div>
      <p className='text-sm pt-3 pb-1 mx-2'>{name}</p>
      <p className='text-sm font-medium mx-2'>{currency}{price}</p>
    </Link>
  );
}

export default ProductItem;
