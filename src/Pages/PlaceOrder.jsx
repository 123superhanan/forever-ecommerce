import React from 'react'
import Title from '../Components/Title'

const PlaceOrder = () => {


  return (

    <>
  <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
    {/* --------- left side --------- */}
    <div className='flex flex-col gap-4 sm:max-w-[480px]'>

      <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/> 
      </div>

      {/* form for delivery information on left side */}
    
    <div className='flex gap-3'>
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Enter First Name' />
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Enter Last Name' />
    </div>
    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Enter Your Email' />
    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
    <div className='flex gap-3'>
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
    </div>
    <div className='flex gap-3'>
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zip Code ' />
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
    </div>
    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone number ' />
    </div> 
    
    




  </div>


    </>
  )
}

export default PlaceOrder
