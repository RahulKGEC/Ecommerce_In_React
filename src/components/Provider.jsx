import React, { useState, useEffect } from 'react'
import { CartContext } from '../App'
// import { useContext } from 'react'


function Provider({ children }) {
    const [cart, setCart] = useState([]);
    const [wish, setWish] = useState([])
    
    console.log(wish)
    useEffect(() => {
        const localStorageData = JSON.parse(localStorage.getItem('cart')) || []
        const localStorageWish = JSON.parse(localStorage.getItem("wish")) || []
        if (localStorageData?.length && cart?.length == 0 || localStorageWish?.length && wish?.length == 0) {
            setCart(localStorageData)
            console.log(localStorageWish)
            setWish(localStorageWish)
        }
        if (cart?.length) {
            localStorage.setItem('cart', JSON.stringify(cart))
        }
        if (wish?.length) {
            localStorage.setItem("wish", JSON.stringify(wish))
        }

    }, [JSON.stringify(cart), JSON.stringify(wish)])


    const addToCart = (cartData) => {
        const sameItem = cart.find(ele => ele?.id === cartData.id)
        if (!sameItem) {
            setCart(prev => [...prev, cartData])
        } else {

            const updatedCard = cart.map(ele => {
                if (ele.id === cartData.id) {
                    return cartData
                } else {
                    return ele
                }
                // setCart(prev=>[...prev,cartData])
            })
            setCart(updatedCard)
        }

    }


    const removeToWish =(id1)=>{
        const filterdata=wish.filter((ele)=>ele.id!==id1)
    setWish(filterdata)
    }

    const addToWish = (wishData) => {
        // console.log(wish)
        const sameItem = wish?.find(ele => ele?.id === wishData?.id)
        // console.log(sameItem)
        if (!sameItem) {
            setWish(prev => [...prev, wishData])
        } else {

            const updatedWish = wish.map(ele => {
                if (ele.id === wishData.id) {
                    return wishData
                } else {
                    return ele
                }
                // setCart(prev=>[...prev,cartData])
            })
            setWish(updatedWish)
        }
    }

    // const addToCart = (cartData) => {
    //     // console.log(cartData);
    //     // for (let i = 0; i < cart.length; i++) {
    //     //     if (cart.length === 0) {
    //     //         setCart([cartData])
    //     //     }
    //     //     console.log(cart);
    //     //     if (cart[i].id !== cartData.id) {
    //     //         setCart(prev => [...prev, cartData])
    //     //     } else {
    //     //         cart[i].qty = cartData.qty;
    //     //     }

    //     // }
    //     const sameItem = cart.find(ele => ele.id === cartData.id)
    //     if (!sameItem) {
    //         setCart(prev => [...prev, cartData])
    //     } else {
    //         const updated = cart.map(ele => {
    //             if (ele.id === cartData.id) {
    //                 return cartData
    //                 // setCart(prev=>[...prev,ele])
    //             } else {
    //                 return ele
    //             }
    //             // setCart(prev=>[...prev,cartData])
    //         })
    //         setCart(updated)

    //     }

    // }
    console.log(cart);
    console.log(wish)
    return (
        <>
            <CartContext.Provider value={{ cart, setCart, addToCart, addToWish, wish, setWish ,removeToWish}}>
                {children}
            </CartContext.Provider>

        </>
    )
}

export default Provider