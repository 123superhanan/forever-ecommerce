import React, { useContext, useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import { shopContext } from '../Context/ShopContext'

const Product = () => {

//to get location of product by router
const {productId} = useParams();
const {products} = useContext(shopContext);

// show data of product according to selected product
const [productData, setProductData] = useState(false);
const [image , setiImage] = useState("");


//fetching product data from data
const fetchProductData = async () => {

    products.map((item) =>{
      if(item._id === productId){
        setProductData(item);
        setiImage(item.image[0])
        
        return null;
      }
    })
}

//get product data every time after redering on page...
useEffect(() => {

  fetchProductData();

},[productId,products])

  return productData ? (

    <>
      <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 ' >
      {/* product data */}
    <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row '>


      {/*product images  */}
      <div>
        
      </div>
    </div>

      </div>



    </>

  ): <div className='opacity-0'></div>
}

export default Product
