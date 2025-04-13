import React , { useState } from 'react'
import { Box, Grid2, Typography } from '@mui/material'
import Navbar from './Navbar'
import Footer from './Footer'
import image1 from "../assets/game.png"
import image2 from "../assets/monitor.png"
import { useContext } from 'react'
import { CartContext } from '../App'


function CheckOut() {
    const { cart } = useContext(CartContext)
    const [shipping, setShipping] = useState(true)
    const [ShippingCost, setShippingCost] = useState(0)
    function func(){
         setShippingCost(Math.floor(Math.random() * 10 + 1))
    }
    return (
        <>
            <Navbar />
            <Box sx={{ padding: { xs: "2rem", md: "2rem", lg: "4rem" }, }}><span className='font-light pr-2'>Home </span><span> /</span><span className='font-boldF pl-2'>   Contact</span></Box>
            <Typography variant='h4' sx={{ ml: 12 }}>Biling Details</Typography>

            <Grid2 container spacing={20} sx={{ px: 12, py: 6 }}>
                <Grid2 item size={{ xs: 12, md: 6, lg: 6 }}>
                    <Typography variant='h6'>First Name <span className='text-red-600'> *</span></Typography>
                    <input type="text" className='w-full my-4 p-4 outline-none bg-[#F5F5F5] text-red-500' />
                    <Typography variant='h6'>Company Name <span className='text-red-600'> *</span></Typography>
                    <input type="text" className='w-full my-4 p-4 outline-none bg-[#F5F5F5] text-red-500' />
                    <Typography variant='h6'>Street Address<span className='text-red-600'> *</span></Typography>
                    <input type="text" className='w-full my-4 p-4 outline-none bg-[#F5F5F5] text-red-500' />
                    <Typography variant='h6'>Apartment , floor , etc, ( optional) <span className='text-red-600'> *</span></Typography>
                    <input type="text" className='w-full my-4 p-4 outline-none bg-[#F5F5F5] text-red-500' />
                    <Typography variant='h6'>Town/City <span className='text-red-600'> *</span></Typography>
                    <input type="text" className='w-full my-4 p-4 outline-none bg-[#F5F5F5] text-red-500' />
                    <Typography variant='h6'>Phone Number <span className='text-red-600'> *</span></Typography>
                    <input type="text" className='w-full my-4 p-4 outline-none bg-[#F5F5F5] text-red-500' />
                    <Typography variant='h6'>Email Address <span className='text-red-600'> *</span></Typography>
                    <input type="text" className='w-full my-4 p-4 outline-none bg-[#F5F5F5] text-red-500' />
                    <div className="nan flex gap-1.5 my-6 text-lg font-semibold">
                        <input type="checkbox" /> <p className="na">Save  this information for faster check-out next time</p>
                    </div>
                </Grid2>
                <Grid2 item size={{ xs: 12, md: 6, lg: 6 }} className='flex flex-col justify-center mr-4 ite'>
                    {cart && cart.map((ele) => (
                        <Box key={ele.id} sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", gap: "40%" }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                <img src={ele.image} alt="" className='h-17 w-17 my-4' />
                                <p className='w-[15rem]'>{ele.title}</p>
                            </Box>
                            <Box>
                                <p>${ele.price * ele.qty}</p>
                            </Box>
                        </Box>
                    ))}



                    {/* <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", gap: "80%", my: 4 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                            <img src={image2} alt="" />
                            <p>LCD Monitor</p>
                        </Box>
                        <Box>
                            <p>$650</p>
                        </Box>
                    </Box> */}
                    <Box sx={{ display: "flex", justifyContent: "space-between" }} className="text-2xl font-semibold my-4">
                        <p>Subtotal:</p>
                        <p>${cart.reduce((acc,ele)=> ele.qty*ele.price+acc,0).toFixed(2)}</p>
                    </Box>
                    <hr className='my-4' />
                    <Box onClick={() => setShipping(!shipping)} sx={{ display: "flex", justifyContent: "space-between" }} className="text-2xl font-semibold">
                        <p>Shipping:</p>
                        {shipping?func:null}
                        <p> {shipping ?  "$"+ShippingCost : "Free"}</p>
                    </Box>
                    <hr className='my-4' />
                    <Box sx={{ display: "flex", justifyContent: "space-between" }} className="text-2xl font-semibold">
                        <p>Total:</p>
                        <p>${(cart.reduce((acc,ele)=> ele.qty*ele.price+acc,0) + Number(ShippingCost) ).toFixed(2)}</p>
                    </Box>

                    <Box className="text-xl text-red-800 my-5">
                        <input type="radio" name="raja" id="" className='text-2xl  my-6' /> Bank  <br />
                        <input type="radio" name="raja" id="" /> Cash on delivery
                    </Box>

                    <Box>
                        <input type="text" className='border p-3 w-[50%] rounded-md mr-4' placeholder='Coupon Code' />
                        <button className=' px-10 rounded-md py-3 m-4 bg-[#DB4444]'>Apply Coupon</button>
                    </Box>
                    <Box>                     <button className=' px-10 rounded-md py-4 my-4 bg-[#DB4444]'>Place Order</button></Box>
                </Grid2>
            </Grid2>
            <Footer />
        </>
    )
}

export default CheckOut