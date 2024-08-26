import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";

export const shopContext = createContext();

const ShopContextProvider = (props) => {


const currency = "$";
const delivery_fee = "10";
const stock = "Buy Now";
const category ="buy it now"









    const value = {
        products,
        currency,
        delivery_fee,
        stock,
        category
    }


    return (
    
        <shopContext.Provider value={value}>
             {props.children}
        </shopContext.Provider>

    )
}

export default ShopContextProvider;