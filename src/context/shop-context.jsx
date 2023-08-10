import React, {createContext, useState} from 'react';
import {data} from "../data";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < data.length+1; i++){
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => { setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1})); }
    const removeFromCart = (itemId) => { setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1})); }
    const updateCartItemCount = (itemId, qty) => { setCartItems((prev) => ({...prev, [itemId]: qty})); }

    const getCartItemCount = () => Object.values(cartItems).filter(item => item !== 0).length
    const getTotalCartAmount = () => {

        let totalAmount = 0;

        for (const item in cartItems){

            if(cartItems[item] > 0){

                let product = data.find(product=>product.id == Number(item));
                console.log('log: ', product)
                totalAmount += cartItems[item] * product.productPrice;
            }
        }

        return totalAmount;
    }




    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,

        getCartItemCount,
        getTotalCartAmount
    }

    console.log(cartItems)
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
