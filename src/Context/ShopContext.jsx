import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";

export const shopContext = createContext();

const ShopContextProvider = (props) => {


const currency = "€";
const delivery_fee = "10";
const stock = "Buy Now";
const category ="buy it now"
const [search , setSearch] = useState('');
const [showSearch, setShowSearch] = useState(false);
const [cartItem, setCartItem] = useState({});


const addtoCart =  async (itemId, size) => {

    if(!size){
        toast.error('Select Product Size');
        return;
    }

    let cartData = structuredClone(cartItem);

    if(cartData[itemId]){
        if(cartData[itemId][size]){
            cartData[itemId][size] += 1;
        }else{
            cartData[itemId][size] = 1;
        }
    }else{
        cartData[itemId] = {};
        cartData[itemId][size] = 1;
    }
    setCartItem(cartData);
}

const getCartCount = () => {

    let totalCount = 0;

    for(const items in cartItem){
        for(const item in cartItem[items]){
                try {
                    if(cartItem[items][item]){
                        totalCount += cartItem[items][item];
                    }
                } catch (error) {
                    toast.error(error)
                }
        }
    }
        return totalCount;
}


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
    }


    return (
    
        <shopContext.Provider value={value}>
             {props.children}
        </shopContext.Provider>

    )
}

export default ShopContextProvider;