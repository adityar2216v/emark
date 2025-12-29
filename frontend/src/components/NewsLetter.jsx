import React from 'react'

const NewsLetter = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault() // prevents page from reloding on submit
    }

  return (
    <div className=' text-center mb-10 justify-center'>
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-sm text-gray-400">
        Subscribe to our newsletter and get 20% off your first purchase
      </p>
      <form className='w-full items-center sm:w-1/2 sm:items-center flex flex-col sm:flex-row gap-2 mt-5 mx-auto'>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email address"
          className="w-full border border-gray-400 px-4 py-2 rounded-lg sm:flex-1 outline-none"        />
        <button className="bg-black text-white px-4 py-2 rounded-lg" onClick={onSubmitHandler}>Subscribe</button>
      </form>
    </div> 
  )
}

export default NewsLetter
