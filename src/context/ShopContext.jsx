/* eslint-disable react/prop-types */
import {createContext, useEffect, useState} from 'react'


export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let index = 0; index < 300+1; index++) {
        cart[index] = 0
    }
    return cart
}

const ShopContextProvider = (props) => {

    const [all_product, setAll_Product] = useState([])

    const [cartItems, setCartItems] = useState(getDefaultCart())

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_BACKEND_URL}/allproducts`)
        .then((res)=>res.json())
        .then((data)=>setAll_Product(data))

        if(localStorage.getItem("auth-token")){
            fetch(`${import.meta.env.VITE_BACKEND_URL}/getcart`, {
                method:"POST",
                headers:{
                    Accept:"application/form-data",
                    "auth-token":`${localStorage.getItem("auth-token")}`,
                    "Content-Type":"application/json",
                },
                body:"",
            }).then((res)=>res.json())
            .then((data)=>setCartItems(data))
        }
    },[])

    const addToCart = (ItemId) => {
        setCartItems((prev) => ({...prev, [ItemId]: prev[ItemId] + 1}))
        if(localStorage.getItem("auth-token")){
            fetch(`${import.meta.env.VITE_BACKEND_URL}/addtocart`, {
                method:"POST",
                headers:{
                    Accept: "application/form-data",
                    "auth-token":`${localStorage.getItem("auth-token")}`,
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({"itemId":ItemId})
            })
            .then((res)=>res.json())
            .then((data)=>console.log(data))
        }
    }

    const removeFromCart = (ItemId) => {
        setCartItems((prev) => ({...prev, [ItemId]: prev[ItemId] - 1}))
        if(localStorage.getItem("auth-token")){
            fetch(`${import.meta.env.VITE_BACKEND_URL}/removefromcart`, {
                method:"POST",
                headers:{
                    Accept: "application/form-data",
                    "auth-token":`${localStorage.getItem("auth-token")}`,
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({"itemId":ItemId})
            })
            .then((res)=>res.json())
            .then((data)=>console.log(data))
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0
        for(const item in cartItems) {
            if (cartItems[item]>0) {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }   
        }
        return totalAmount
    }

    const getTotalCartItems = () => {
        let totalItems = 0
        for(const item in cartItems) {
            if (cartItems[item]>0) {
                totalItems += cartItems[item]
            }   
        }
        return totalItems
    }

    const contextValue = {getTotalCartItems, getTotalCartAmount,all_product, cartItems, addToCart, removeFromCart}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider