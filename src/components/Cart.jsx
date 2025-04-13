import React, { useState, } from 'react'
import { useContext } from 'react'
import { CartContext } from '../App'
import Navbar from './Navbar'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'
import { Box, Typography, Button, Grid2 } from '@mui/material'
import image1 from "../assets/monitor.png"
import image2 from "../assets/game.png"
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import image3 from "../assets/icon-cancel.png"
import { useNavigate } from 'react-router-dom'


function Cart() {
    const [count, setCount] = useState(1)
    const navigator = useNavigate();
    const [count2, setCount2] = useState(1)
    const [shipping, setShipping] = useState(false)
    const [ShippingCost, setShippingCost] = useState(0)
    const { cart, setCart } = useContext(CartContext)
    function removeFromCart(id) {
        const newCart = cart.filter((ele) => ele?.id !== id)
        setCart(newCart)
    }
    //single function me banane ke liye , we dont need 2 function thats why DSA logic applied here , state is simply 0 and 1
    function updateQTY(id, state) {
        const updatedCart = cart.map((ele) => {
            if (ele.id === id) {
                if (state) {
                    return { ...ele, qty: ele.qty + 1 }
                } else {
                    if (ele.qty === 1) {


                        return { ...ele, qty: 1 }
                    } else {
                        return { ...ele, qty: ele.qty - 1 }

                    }
                }
            } else {
                return ele;
            }
        })
        setCart(updatedCart)
    }
    function calcShipping() {
        setShippingCost(Math.floor(Math.random() * 10 + 1))
    }
    return (
        <>
            <Navbar />
            <Box sx={{ padding: { xs: "2rem", md: "2rem", lg: "4rem" }, }}><span className='font-light pr-2'>Home </span><span> /</span><span className='font-boldF pl-2'>   Cart</span></Box>
            <Box sx={{ fontSize: { xs: "0.7rem", md: "1rem", lg: "1.3rem" }, display: "flex", justifyContent: "space-between", paddingInline: { xs: "1rem", md: "2rem", lg: "4rem" }, py: "1rem", boxShadow: "rgba(0, 0, 0, 0.35) 0px 3px 20px" }}>
                <Typography variant="h5">Product</Typography>
                <Typography variant="h5">Price</Typography>
                <Typography variant="h5">Quality</Typography>
                <Typography variant="h5">Subtotal</Typography>
            </Box>
            {cart && cart.map((ele) => (
                <Box key={ele?.id} onClick={() => navigator(`/product/${ele.id}`)} sx={{ my: "1rem", display: "flex", alignItems: "center", justifyContent: "space-between", paddingInline: { xs: "1rem", md: "2rem", lg: "4rem" }, py: "1rem", boxShadow: "rgba(0, 0, 0, 0.35) 0px 3px 20px" }}>
                    <Box className="relative" sx={{ display: "flex", alignItems: "center", }}>
                        <img src={ele?.image} alt="" className='h-17 w-17' /><Typography variant='h6' className='w-[9rem]  ' sx={{ fontSize: { xs: "0.8rem", md: "1rem", lg: "1.2rem", } }}>{ele?.title}</Typography> <img src={image3} alt="" onClick={() => removeFromCart(ele?.id)} className='absolute -top-1 -left-2' />
                    </Box>
                    <Typography variant='h6' sx={{ fontSize: { xs: "1.3rem", md: "1.3rem", lg: "1.4rem" } }}>${ele?.price}</Typography>
                    <Box sx={{ display: "flex", border: "2px solid black" }}>
                        <Typography variant='h6' sx={{ fontSize: { xs: "1.3rem", md: "1.3rem", lg: "1.4rem" } }}>{ele?.qty}</Typography>  <Box><FaChevronUp onClick={() => updateQTY(ele.id, 1)} /> <FaChevronDown onClick={() => updateQTY(ele.id, 0)} /> </Box>
                    </Box>
                    <Typography variant='h6' sx={{ fontSize: { xs: "1.3rem", md: "1.3rem", lg: "1.4rem" } }}>${(ele?.price * ele?.qty).toFixed(2)}</Typography>
                </Box>
            ))}


            {/* <Box sx={{ my: "1rem", display: "flex", alignItems: "center", justifyContent: "space-between", paddingInline: { xs: "1rem", md: "2rem", lg: "4rem" }, py: "1rem", boxShadow: "rgba(0, 0, 0, 0.35) 0px 3px 20px" }}>
                <Box sx={{ display: "flex", alignItems: "center", }}>
                    <img src={image2} alt="" className='h-17 w-17' /><Typography variant='h6' sx={{ fontSize: { xs: "1.3rem", md: "1.3rem", lg: "1.4rem" } }}>Monitor</Typography>
                </Box>
                <Typography variant='h6' sx={{ fontSize: { xs: "1.3rem", md: "1.3rem", lg: "1.4rem" } }}>$100</Typography>
                <Box sx={{ display: "flex", border: "2px solid black" }}>
                    <Typography variant='h6' sx={{ fontSize: { xs: "1.3rem", md: "1.3rem", lg: "1.4rem" } }}>{count2 > 9 ? count2 : `0${count2}`}</Typography>  <Box><FaChevronUp onClick={() => setCount2(count2 + 1)} /> <FaChevronDown onClick={() => { count2 === 1 ? setCount2(1) : setCount2(count2 - 1) }} /></Box>
                </Box>
                <Typography variant='h6' sx={{ fontSize: { xs: "1.3rem", md: "1.3rem", lg: "1.4rem" } }}>$100</Typography>
            </Box> */}

            <Box sx={{ display: "flex", justifyContent: "space-between", paddingInline: { xs: "1rem", md: "2rem", lg: "4rem" }, py: "1rem" }}>
                <button className='px-10 rounded-md py-3 m-4 border'><NavLink to="/">Return To Shop</NavLink> </button>
                <button className='px-10 rounded-md py-3 m-4 border'>Update Cart</button>
            </Box>

            <Grid2 container spacing={2}>
                <Grid2 item size={{ xs: 12, md: 6, lg: 6 }} sx={{ alignItems: "center", display: "flex", justifyContent: "flex-start", paddingInline: { xs: "1rem", md: "1rem", lg: "2rem" }, py: "1rem", border: "2px solid black", boxShadow: "rgba(0, 0, 0, 0.35) 0px 3px 20px" }}>
                    <input type="text" placeholder='Coupon Code' className='border w-70 h-12  ' />
                    <button className='px-10 rounded-md py-3 m-4  bg-[#DB4444]'>Apply Coupon</button>
                </Grid2>
                <Grid2 item size={{ xs: 12, md: 6, lg: 6 }} sx={{}}>
                    <Box className='flex flex-start'>


                        <Typography variant="h4" >Cart Total</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", m: 2 }}>
                        <Typography variant="h6">Subtotal:</Typography>
                        <Typography variant="h6">${(cart.reduce((acc, ele) => ele?.price * ele?.qty + acc, 0)).toFixed(2)}</Typography>
                    </Box>
                    <hr />
                    <Box sx={{ display: "flex", justifyContent: "space-between", m: 2 }} onClick={() => setShipping(!shipping)}>
                        <Typography variant="h6">Shipping:</Typography>
                        {shipping ? calcShipping : null}
                        <Typography variant="h6" >{shipping ? ShippingCost : "Free"}</Typography>
                    </Box>
                    <hr />
                    <Box sx={{ display: "flex", justifyContent: "space-between", m: 2 }}>
                        <Typography variant="h6">Total:</Typography>
                        <Typography variant="h6">${(cart.reduce((acc, ele) => ele?.qty * ele?.price + acc, 0) + ShippingCost).toFixed(2)}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "flex-center", mx: "30%" }}>
                        <button className='px-10 rounded-md py-3 m-4  bg-[#DB4444] flex flex-center'><NavLink to="/checkout">Proceed to checkout</NavLink></button>
                    </Box>
                </Grid2>


            </Grid2>
            <Footer />

        </>
    )
}

export default Cart