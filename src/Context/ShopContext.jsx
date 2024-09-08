import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";

// Create the shop context
export const shopContext = createContext();

const ShopContextProvider = (props) => {
  // Global variables
  const currency = "€";
  const delivery_fee = 10;
  const stock = "Buy Now";
  const category = "buy it now";

  // States
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState({});

  // Add item to cart
  const addtoCart = async (itemId, size) => {
    if (!size) {
      toast.error('Select Product Size');
      return;
    }

    let cartData = structuredClone(cartItem);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItem(cartData);
  };

  // Get total cart count
  const getCartCount = () => {
    let totalCount = 0;

    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item]) {
            totalCount += cartItem[items][item];
          }
        } catch (error) {
          toast.error(error);
        }
      }
    }

    return totalCount;
  };

  //update cart by changing quantity or delete product
  const updateQuantity = async (itemId, size, quantity) => {

    let cartData = structuredClone(cartItem);
    cartData[itemId][size] = quantity
    setCartItem(cartData);
  }

  //functionality for total calculation 
  const getCartAmount = ()  => {
    let totalAmount = 0;
    for(const items in cartItem) {
      let itemInfo = products.find((product) => product._id === items);
      for(const item in cartItem[items]){
        try {
            if(cartItem[items][item] > 0){
              totalAmount += itemInfo.price * cartItem[items][item]
            }
        } catch (error) {
          toast.error(error);
        }
      }
  }
  return totalAmount
}

  // Context value
  const value = {
    products,
    currency,
    delivery_fee,
    stock,
    category,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    addtoCart,
    getCartCount,
    updateQuantity,
    getCartAmount
  };

  return (
    <shopContext.Provider value={value}>
      {props.children}
    </shopContext.Provider>
  );
};

export default ShopContextProvider;
