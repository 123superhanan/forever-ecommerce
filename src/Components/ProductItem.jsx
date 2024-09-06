import React, { useContext } from 'react'
import { shopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,name,price}) => {

    const {currency, stock} = useContext(shopContext);

  return (

    <>
     <Link className="block max-w-sm rounded-md overflow-hidden shadow-lg bg-white cursor-pointer transition-transform hover:scale-105 mt-4" to={`/product/${id}`}>
  <div className="relative overflow-hidden">
    <img className="object-cover cursor-not-allowed w-full h-48 transition-transform ease-in-out duration-300 hover:scale-110" src={image[0]} alt={name} />
  </div>
  <div className="p-4">
    <h2 className="font-semibold text-gray-800 text-md mb-1">{name}</h2>
    <p className="text-red-600 text-sm">{currency}{price}</p>
  </div>
  <div className="flex items-center justify-center mt-2">
    <p className="bg-black text-xs px-4 py-2 text-white transition ease-in-out rounded-md border border-gray-400 hover:bg-white hover:text-black mb-2">
      {stock}
    </p>
  </div>
</Link>

    </>

  )
}

export default ProductItem
