import Title from '../components/Title'
import { useState } from 'react'
import CartTotal from './CartTotal'
import { assets } from '../assets/frontend_assets/assets'
import { useNavigate } from 'react-router-dom'



const PlaceOrder = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add logic to process the order
  }

  const [method, setMethod] = useState('cod');

  const handlePaymentMethodClick = (selectedMethod) => {
    setMethod(selectedMethod);
  };

  const navigate = useNavigate()

  return (
    <div className='container mx-auto px-4 py-8 mt-20'>
      <div className=' mx-auto'>
        
        <hr className='mb-8' /> 

        <div className='flex flex-col sm:flex-row justify-around gap-10 bg-gray-100 p-8 rounded-md shadow-md'>

        <form onSubmit={handleSubmit} className='space-y-6  rounded-md '>
          <div className=' text-2xl font-bold mb-8'>
            <Title text1="DELIVERY" text2="INFORMATION" />
          </div>
          <div className='flex flex-col sm:flex-row gap-4'>
            <label htmlFor="name" className='text-lg w-full sm:w-1/4'>Name:</label>
            <div className='flex flex-col sm:flex-row gap-2 w-full sm:w-3/4'>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder='First Name'
                className='p-2 rounded-md bg-gray-200 w-full'
                required
              />
              <input type="text" name="lastName" placeholder='Last Name' className='p-2 rounded-md bg-gray-200 w-full' required />
            </div>
          </div>

          <div className='flex flex-col sm:flex-row gap-4'>
            <label htmlFor="email" className='text-lg w-full sm:w-1/4'>Email:</label>
            <input type="email" name="email" placeholder='Enter your email address' className='p-2 rounded-md bg-gray-200 w-full sm:w-3/4' required />
          </div>

          <div className='flex flex-col sm:flex-row gap-4'>
            <label htmlFor="address" className='text-lg w-full sm:w-1/4'>Address:</label>
            <div className='flex flex-col gap-2 w-full sm:w-3/4'>
              <input type="text" name="street" placeholder='Street' className='p-2 rounded-md bg-gray-200' required />
              <div className='flex flex-col sm:flex-row gap-2'>
                <input type="text" name="city" placeholder='City' className='p-2 rounded-md bg-gray-200 w-full' required />
                <input type="text" name="state" placeholder='State' className='p-2 rounded-md bg-gray-200 w-full' />
              </div>
              <div className='flex flex-col sm:flex-row gap-2'>
                <input type="text" name="zipCode" placeholder='Zip Code' className='p-2 rounded-md bg-gray-200 w-full' required />
                <input type="text" name="country" placeholder='Country' className='p-2 rounded-md bg-gray-200 w-full' required />
              </div>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row gap-4'>
            <label htmlFor="phone" className='text-lg w-full sm:w-1/4'>Phone:</label>
            <input type="tel" name="phone" placeholder='Enter Phone Number' className='p-2 rounded-md bg-gray-200 w-full sm:w-3/4' required />
          </div>
        </form>

        <section className='  items-center'>
          <CartTotal />
          
          <div className=' text-2xl font-bold mt-10'>
          <Title text1="PAYMENT" text2="METHOD" />
          {/* ------------PAYMENT METHODS------------ */}
          <div className='flex flex-col gap-4 lg:flex-row justify-center'>
            {['stripe', 'razorpay', 'cod'].map((paymentMethod) => (
              <div
                key={paymentMethod}
                onClick={() => handlePaymentMethodClick(paymentMethod)}
                className='flex items-center gap-4 border p-2 px-3 cursor-pointer hover:bg-gray-200 my-1 sm:my-6'
              >
                <div className={`w-3.5 h-3.5 border rounded-full ${method === paymentMethod ? 'bg-green-400' : 'bg-white'}`}></div>
                {paymentMethod === 'cod' ? (
                  <p className='text-lg font-semibold text-gray-600'>CASH ON DELIVERY</p>
                ) : (
                  <img src={assets[`${paymentMethod}_logo`]} alt={paymentMethod} className='h-5 mx-4' />
                )}
              </div>
            ))}
          </div>
          </div>
          <hr className='mb-8' /> 
          <div className='flex justify-center mt-10'>
              <button type="submit" onClick={() => navigate('/orders')} className='w-2/3 md:w-1/3  bg-black text-white p-2 hover:bg-gray-600'>
                Place Order
              </button>
          </div>
        </section>

        </div>
        
      </div>
    </div>
  )
}

export default PlaceOrder
