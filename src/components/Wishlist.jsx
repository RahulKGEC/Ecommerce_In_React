import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import image1 from "../assets/starji.png"
import image2 from "../assets/frame.png"
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { SlEye } from "react-icons/sl";
import { BsCart3 } from "react-icons/bs";
// import { FaRegHeart } from "react-icons/fa";
import { Box, Grid2, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { CartContext } from '../App';
import { useContext } from 'react';

function Wishlist() {
    const [wholeData, setWholeData] = useState()
    const [all, setAll] = useState([]);
    const navigator = useNavigate();
    const [strj, setStr] = useState("")
    const { id } = useParams()
    const { wish, setWish } = useContext(CartContext)
    // useEffect(() => {
    //     if (id) {
    //         fetch(`https://fakestoreapi.com/products/${id}`)
    //             .then(res => res.json())
    //             .then(data => { setWholeData(data) })
    //     }
    // }
    // , [id])

    // console.log(wholeData, all)
    console.log(wish)
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then(res => res.json())
            .then(data => { setAll(data) })
    },[])

    return (
        <>
            <Navbar />
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "2rem" }}>
                <Typography variant='h5'>Wishlist ( {wish.length} ) </Typography>
                <button className=' px-10 rounded-md py-3 m-4 border-1 hover:bg-[#DB4444]'>Send Message</button>
            </Box>
            <Box>

                <div className="container na overflow-x-auto flex   gap-2 border-black border-2">
                    {wish && wish.map((item) => (
                        <div key={item?.id} className=" w-[20rem] m-2   relative border-red-800 border-2  flex flex-shrink-0 flex-col" onClick={() => navigator(`/product/${item.id}`)}> {/* Ensure div has a fixed width */}
                            <img
                                src={item?.image}
                                alt=""
                                className="h-[18rem] w-[25rem] object-fit border-black p-12 bg-[#F5F5F5]"
                            />
                            <span className="nana text-2xl p-2  bg-black text-white flex items-center justify-center gap-2"> <BsCart3 /> Add To Cart</span>

                            <RiDeleteBinLine className='absolute right-4 top-4 font-bold text-2xl' />
                            {/* <SlEye className='absolute right-4 top-12 font-bold text-2xl' /> */}
                            <p className="na text-md font-bold m-4 border-black">{item?.title}</p>
                            <span className="nana text-2xl p-2 rounded-2xl bg-[#DB4444] m-4">${item?.price}</span>
                        </div>
                    ))
                    }
                </div>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "2rem" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <button className=' py-6 px-2 bg-red-400 '></button><p className="na text-[#DB4444] font-bold">Just For You </p>
                </Box>
                <button className=' px-10 rounded-md py-3 m-4 border-1 hover:bg-[#DB4444]'>See All</button>
            </Box>
            <Box>

                <div className="container na overflow-x-auto flex   gap-2 border-black border-2">
                    {all.map((item) => (
                        <div key={item?.id} className=" w-[20rem] m-2   relative border-red-800 border-2  flex flex-shrink-0 flex-col" onClick={() => navigator(`/product/${item.id}`)}> {/* Ensure div has a fixed width */}
                            <img
                                src={item?.image}
                                alt=""
                                className="h-[18rem] w-[25rem] object-fit border-black p-12 bg-[#F5F5F5]"
                            />
                            <span className="nana text-2xl p-2  bg-black text-white flex items-center justify-center gap-2"> <BsCart3 /> Add To Cart</span>

                            < SlEye className='absolute right-4 top-4 font-bold text-2xl' />
                            {/* <RiDeleteBinLine className='absolute right-4 top-4 font-bold text-2xl'/> */}
                            {/* <SlEye className='absolute right-4 top-12 font-bold text-2xl' /> */}
                            {/* <SlEye className='absolute right-4 top-12 font-bold text-2xl' /> */}
                            <p className="na text-md font-bold m-4 border-black">{item?.title}</p>
                            <span className="nana text-2xl p-2 rounded-2xl text-red-700 m-4">$  {item?.price}</span>
                            <span className="nana text-md p-2  text-black-700 mx-4"> {item?.description.length > 50 ? `${item.description.slice(0, 48)}  ....` : item.description}</span>
                        </div>
                    ))}
                </div>


            </Box>

            <Footer />

        </>
    )
}

export default Wishlist