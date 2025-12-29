import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, cartItems } = useContext(ShopContext);
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

  return (
    <div className="mt-24">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      {/* Check if there are any products */}
      <div>
        {cartData.length > 0 ? (
          <>
            {cartData.map((item, index) => {
              const productData = products.find((product) => product._id === item.id);

              return (
                <div
                  key={index}
                  className='flex flex-row justify-between py-4 border-t border-b text-gray-700 gap-4'
                >
                  <div className='flex items-start gap-6'>
                    <img src={productData.image} className='w-24 h-24 object-cover rounded-md' alt={productData.name} />
                    <div className='flex-grow'>
                      <p className='text-lg font-medium'>{productData.name}</p>
                      <p className='text-gray-500 font-semibold mt-1'>Size: {item.size}</p>
                      <p className='text-gray-800 font-bold text-lg'>Price: ${item.price}</p>
                    </div>
                  </div>

                  <div className='flex flex-col sm:flex-row items-center mt-2 gap-6'>
                    <div>
                      <p className="text-gray-600 mt-2">Quantity: {item.quantity}</p>
                      <p className="text-gray-600">Size: {item.size}</p>
                      <div className="flex flex-col">
                        <p className="text-gray-600">
                          DATE: <span className="font-semibold">26 JULY 2024</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/2 flex justify-center">
                    <div className="flex gap-2 items-center">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <p className="text-gray-600">Ready to Ship</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <p className="text-lg font-semibold">${item.price * item.quantity}</p>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
