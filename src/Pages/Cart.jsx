import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { shopContext } from '../Context/ShopContext'
import Title from '../Components/Title';

const Cart = () => {

  const {products, currency, cartItem} = useContext(shopContext);
  const [cartData, setCartData] = useState([]);

  useEffect (() => {

  const tempData = [];
    for(const items in cartItem){
      for(const item in cartItem[items]){
        if(cartItem[items][item] > 0){
            tempData.push(
              {
                _id : items,
                sizes : item,
                quantity : cartItem[items][item]
              }
             )
        }
      }
    }
  setCartData(tempData);
},[cartItem])

  return (
    <>
      <div className='border-t pt-14'>
          <div className='text-2xl mb-3'>
              <Title text1={"YOUR"} text2={'CART'}/>
          </div>

          <div>
            
          </div>

      </div>

    </>
  )
}

export default Cart
