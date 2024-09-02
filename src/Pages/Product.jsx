import React, { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { shopContext } from '../Context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';

const Product = () => {
  // to get location of product by router
  const { productId } = useParams();
  const { products, currency } = useContext(shopContext);

  // show data of product according to selected product
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  //selection of sizes of product
  const [sizes, setSizes] = useState('')

  // fetching product data from data
  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        // SHOWING SELECTED PICTURE
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  // get product data every time after rendering on page...
  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <>
      <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
        {/*------- product data------- */}
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
          {/*--------product images--------*/}
          <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
            <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-hidden justify-between sm:justify-normal sm:w-[18.7%] w-full'>
              {productData.image.map((item, index) => (
                <img
                  onClick={() => setImage(item)}
                  className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                  src={item}
                  key={index}
                  alt="productData.image"
                />
              ))}
            </div>
            <div className='w-full sm:w-[80%]'>
              <img className='w-full h-auto rounded-sm' src={image} alt="image" />
            </div>
          </div>

          {/*------------ PRODUCT INFORMATION------------ */}
              <div className='flex-1'>
                <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                <div className='flex items-center gap-1 mt-2'>
                    <img src={assets.star_icon} alt="" className="w-3.5 rounded-md" />
                    <img src={assets.star_icon} alt="" className="w-3.5 rounded-md" />
                    <img src={assets.star_icon} alt="" className="w-3.5 rounded-md" />
                    <img src={assets.star_icon} alt="" className="w-3.5 rounded-md" />
                    <img src={assets.star_dull_icon} alt="" className="w-3.5" />
                    <p className='pl-2'>(122)</p>
                </div>
                <p className='mt-5 text-3xl font-medium text-red-500'>{currency}{productData.price}</p>
                <p className='mt-5 text-gray-500 md:w-4/5 '>{productData.description}</p>
                <div className='flex flex-col gap-4 my-8'>
                      <p>SELECT SIZE</p>
                      <div className='flex gap-2'>
                          {
                            productData.sizes.map((item, index) =>(
                              <button onClick={() => setSizes(item)} className={`border py-2 px-4 bg-gray-100  ${item === sizes ? 'border-orange-500': ''}`} key={index}>{item}</button>
                            ))
                          }
                      </div>
                </div>
                <button className='bg-black text-white px-8 py-3 text:sm active:bg-g'>ADD TO CART</button>
              </div>

        </div>
      </div>
    </>
  ) : <div className='opacity-0'></div>;
}

export default Product;
