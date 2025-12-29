import { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import CartTotal from './CartTotal';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateCartItemCount, products, getCartAmount, navigate } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const data = [];
    for (const itemId in cartItems) {
      const product = products.find(p => p._id === itemId);
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          data.push({
            id: itemId,
            size: size,
            quantity: cartItems[itemId][size],
            price: product.price, // Add the price from the product
          });
        }
      }
    }
    setCartData(data);
  }, [cartItems, products]);

  const handleRemoveFromCart = (productId, size) => {
    removeFromCart(productId, size);

    // Update local state
    setCartData(prevCartData =>
      prevCartData.filter(item => !(item.id === productId && item.size === size))
    );
  };

  const handleQuantityChange = (productId, size, change) => {
    const currentQuantity = cartItems[productId]?.[size] || 0;
    const newQuantity = currentQuantity + change;

    updateCartItemCount(productId, size, newQuantity);
  };

  return (
    <div className='border-t mt-28 pt-4'>
      <div className='text-2xl mb-3 font-bold'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {cartData.length > 0 ? (
          <>
            {cartData.map((item, index) => {
              const productData = products.find((product) => product._id === item.id); // Match _id with item ID

              return (
                <div
                  key={index}
                  className='flex flex-row justify-between py-4 border-t border-b text-gray-700 gap-4'
                >
                  <div className='flex items-start gap-6'>
                    <img src={productData.image} className='w-24 h-24 object-cover rounded-md' alt={productData.name} />
                    <div className='flex-grow'>
                      <div className='flex justify-between items-start'>
                        <p className='text-lg font-medium'>{productData.name}</p>
                      </div>
                      <p className='text-gray-500 font-semibold mt-1'>Size: {item.size}</p>
                      
                      <p className='text-gray-800 font-bold text-lg'>Price: ${item.price}</p>
                    </div>
                  </div>

                  <div className='flex flex-col sm:flex-row items-center mt-2 gap-6'>
                    {/* Quantity Control */}
                    <div className='flex items-center gap-2'>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.size, -1)}
                        className='bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300'
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.size, 1)}
                        className='bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300'
                      >
                        +
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => handleRemoveFromCart(item.id, item.size)}
                      className='bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600'
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Cart Total and Proceed to Pay */}
            <div className='mt-8 flex flex-col justify-between gap-4'>
              <CartTotal /> {/* Display total amount */}
              <button onClick={() => navigate('/PlaceOrder')} className='bg-black text-xl text-white px-4 sm:px-5 py-3  hover:bg-gray-800'>
                Place Order 
              </button>
            </div>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
