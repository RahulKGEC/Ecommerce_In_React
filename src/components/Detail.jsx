import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import image1 from "../assets/starji.png"
import image2 from "../assets/frame.png"
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { SlEye } from "react-icons/sl";
// import { FaRegHeart } from "react-icons/fa";
import { Box, Grid2, Typography } from '@mui/material';
import { BsHeartFill } from "react-icons/bs";
// import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { useContext } from 'react';
import { CartContext } from '../App';
// import { useContext } from 'react';


function Detail() {
  const [data, setData] = useState({});
  const { addToCart, cart, setCart, addToWish ,wish ,setWish,removeToWish} = useContext(CartContext)
  const [wholedata, setWholeData] = useState([]);
  const [heart, setHeart] = useState(false)
  const [count, setCount] = useState(1);
  const navigator = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => { setData(data); })
    }
  }, [id])

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products`)
        .then(res => res.json())
        .then(data => { setWholeData(data) })
    }
  }, [id])
  //  console.log(wholedata);
  //   function quantityJi(){

  //     const item=  cart.filter((ele)=>ele.id===Number(id))
  //     console.log( {cart})
  //     setCount( item[0]?.qty??1)
  //  }
  // const [heart,setHeart]= useState(false);
  function quantityJi() {
    const item = cart.find((ele) => ele.id === Number(id))
    // console.log(item)
    setCount(item?.qty ?? 1)
  }

  const isWishListed = wish?.some(item=>item?.id==id)
  console.log({isWishListed})
// console.log("wish", wish)
  useEffect(() => {
    if (id) {
      quantityJi();
    }
  }, [id])

  return (
    <>
      <Navbar />

      <Grid2 container spacing={3}>
        <Grid2 item size={{ xs: 12, md: 2, lg: 2 }}>
          <Box className=" border-2  h-[12rem] w-[12rem] bg-[#F5F5F5]">
            <img src={data?.image} alt="" className=' h-[10rem] border-2 w-[10rem] m-auto mt-4' />
          </Box>
          <Box className=" border-2  h-[12rem] w-[12rem] bg-[#F5F5F5]">
            <img src={data?.image} alt="" className=' h-[10rem] border-2 w-[10rem] m-auto mt-4' />
          </Box>
          <Box className=" border-2  h-[12rem] w-[12rem] bg-[#F5F5F5]">
            <img src={data?.image} alt="" className=' h-[10rem] border-2 w-[10rem] m-auto mt-4' />
          </Box>
        </Grid2>
        <Grid2 item size={{ xs: 12, md: 5, lg: 5 }}>
          <Box className="   bg-[#F5F5F5]">
            <img src={data?.image} alt="" className='   h-[36rem] m-auto mt-4 p-4' />
          </Box>
        </Grid2>
        <Grid2 item size={{ xs: 12, md: 5, lg: 5 }}>

          <Typography variant="h5" sx={{ fontSize: "2rem ", fontWeight: "bold" }}> {data?.title}</Typography>
          <Box sx={{ display: "flex ", gap: "1rem", fontSize: "1.4rem", my: "0.5rem" }}><img src={image1} alt="" /> <p>( {data?.rating?.count}   Reviews )</p> <p> | </p> <p className="oa text-[#66FFA3]">In Stock</p></Box>

          <p className="nana font-bold text-md my-4">{data?.description}</p>

          <Box sx={{ display: "flex ", fontSize: "1.3rem", fontWeight: "600", my: "1rem" }}><p className=''> Colours : </p >  <input type="radio" name="raja" id="" className='mx-4 ' /> <input type="radio" name="raja" id="" /> </Box>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Typography variant='h5'>Size : </Typography>
            <button className='border-2 p-2  hover:bg-red-400 rounded-lg '>XS</button>
            <button className='border-2 px-3 hover:bg-red-400  rounded-lg'>S</button>
            <button className='border-2 px-3 hover:bg-red-400  rounded-lg'>M</button>
            <button className='border-2 px-3 hover:bg-red-400  rounded-lg'>L</button>
            <button className='border-2 p-2 hover:bg-red-400  rounded-lg'>XL</button>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>

            <Box sx={{ display: "flex", my: "1rem" }}>
              <button className='border-l-2 border-t-2 border-b-2 p-2 px-4 hover:bg-red-400  rounded-l-lg' onClick={() => { if (count === 1) { setCount(1); } else { setCount(count - 1) } }}><FaMinus /></button>
              <p className="nanna border-2 p-2 w-[6rem] flex justify-center">{count}</p>
              <button className='border-r-2 border-t-2 border-b-2 p-2 px-4 hover:bg-red-400  rounded-r-lg' onClick={() => setCount(count + 1)}><FaPlus /></button>
            </Box>
            <button className=' px-10 rounded-md py-3 m-4 bg-[#DB4444]' onClick={() => addToCart({ ...data, qty: count })}><NavLink to="/cart">Buy Now</NavLink> </button>
            <Box sx={{ border: "2px solid black", p: 1, borderRadius: "0.6rem" }} onClick={() => { setHeart(!heart) }}>
              {!isWishListed ? <FaRegHeart className='font-bold text-3xl  ' onClick={ () => addToWish({ ...data, qty: count})} /> : <BsHeartFill className='text-red-700 font-bold text-3xl ' onClick={ () => {removeToWish(data.id),console.log(data.id)} }/>}

            </Box>


               {/* <Box sx={{ border: "2px solid black", p: 1, borderRadius: "0.6rem" }} onClick={() => { addToWish({...data,qty:count,heart:heart}) }}>
              {heart === false ? <FaRegHeart className='font-bold text-3xl  ' /> : <BsHeartFill className='text-red-700 font-bold text-3xl ' />} */}
         
            {/* </Box> */}
          </Box>
          <Box sx={{ my: "2rem" }}>
            <img src={image2} alt="" />
          </Box>

        </Grid2>
      </Grid2>
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button className=' py-6 px-2 bg-red-400 '></button><p className="na text-[#DB4444] font-bold">Related Item</p>
        </Box>
        <Box>
          <div className="container na overflow-x-auto flex   gap-2 border-black border-2">
            {wholedata.map((item) => (
              <div key={item?.id} className=" w-[20rem] m-2   relative border-red-800 border-2  flex flex-shrink-0 flex-col" onClick={() => navigator(`/product/${item.id}`)}> {/* Ensure div has a fixed width */}
                <img
                  src={item?.image}
                  alt=""
                  className="h-[18rem] w-[25rem] object-fit border-black p-12 bg-[#F5F5F5]"
                />
                <FaRegHeart className='absolute right-4 top-4 font-bold text-2xl' />
                <SlEye className='absolute right-4 top-12 font-bold text-2xl' />
                <p className="na text-md font-bold m-4 border-black">{item?.title}</p>
                <span className="nana text-2xl p-2 rounded-2xl bg-[#DB4444] m-4">${item?.price}</span>
              </div>
            ))}
          </div>
        </Box>

      </Box>

      <Footer />
    </>
  );
}

export default Detail;
