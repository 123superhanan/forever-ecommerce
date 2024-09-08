import React, { useContext } from 'react'
import { shopContext } from '../Context/ShopContext'
import Title from './Title';

const cartTotal = () => {

 
  const {currency, delivery_fee, getCartAmount} = useContext(shopContext);

  return (

    <>
        <div className='w-full'>
            <div className='text-2xl'>
                <Title  text1={"CART"} text2={"TOTAL"}/>
            </div>

            <div className='flex flex-col gap-2 mt-2 text-sm'>
                <div className='flex justify-between'>
                    <p>SubTotal</p>
                    <p className='text-green-500'>{currency}{getCartAmount()}.00</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Shipping Fee</p>
                    <p className='text-orange-400'>{currency}{delivery_fee}.00</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <b>Total</b>
                    <b className='text-red-600'>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
                </div>
            </div>
        </div>

    </>
  )
}

export default cartTotal
