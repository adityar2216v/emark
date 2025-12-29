import { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const CartTotal = () => {
  const { getCartAmount, DeliveryFee } = useContext(ShopContext);
  const [subtotal, setSubtotal] = useState(0);
  const serviceCharge = 5;

  useEffect(() => {
    const amount = getCartAmount();
    setSubtotal(amount);
  }, [getCartAmount]);

  const total = subtotal + DeliveryFee + serviceCharge;

  return (
    <div>
        <div className=' text-start text-2xl font-bold'>
            <Title text1="CART" text2="TOTAL" />
        </div>
    <div className="cart-total flex flex-col sm:flex-row gap-4 sm:gap-20 justify-between mx-2 md:mx-12 lg:mx-16">
      
      <div className='flex flex-row sm:flex-col'>
        <h2 className='text-lg md:text-xl my-2 font-semibold'>Subtotal: ${subtotal.toFixed(2)}</h2>
        <h2 className='text-lg md:text-xl my-2 font-semibold'>Delivery Fee: ${DeliveryFee.toFixed(2)}</h2>
        <h2 className='md:text-xl my-2 font-semibold'>Service Charge: ${serviceCharge.toFixed(2)}</h2>
      </div>
      <div className='text-center sm:text-right  flex-col sm:flex-row'>
         <h2 className='text-xl md:text-2xl mb-4 sm:mb-14 md:mb-6 text-gray-600 font-bold'>Total Amount: ${total.toFixed(2)}</h2>
      </div>
    </div>
    </div>
    
  );
};

export default CartTotal;
