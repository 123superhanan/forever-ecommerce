import React, { useState } from 'react'
import Title from '../Components/Title'
import CartTotal from '../Components/CartTotal';
import { assets } from '../assets/frontend_assets/assets';

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod');


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
    
    {/* -------------- Right Side --------------- */}

      <div className='mt-8'>

        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>
        <div className='mt-12'>
          <Title  text1={'PAYMENT'} text2={'METHOD'}/>
          {/* --------PAYMENT METHOD SELECTION------- */}
          <div className='flex gap-3 flex-col lg:flex-row' >
                <div onClick={() => setMethod('stripe')}  className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-500' : ''}`}></p>
                    <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
                </div>

                <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-500' : ''}`}></p>
                    <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
                </div>

                <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-500' : ''}`}></p>
                    <p className='text-gray-500 text-sm font-medium mx-4'>CASH PAYMENT</p>
                </div>
          </div>
              <div className='w-full text-end mt-8'>
                <button className='bg-black text-white text-sm px-16 py-3 active:bg-green-600'>PLACE ORDER</button>
            </div>
        </div> 
      </div>
  </div>


    </>
  )
}

export default PlaceOrder
