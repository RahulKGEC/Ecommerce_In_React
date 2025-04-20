import React, { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Grid2, Typography, Box } from '@mui/material'
import { FaChevronRight } from "react-icons/fa";
import Cart23 from './components/Cart23'
// import { useNavigate } from 'react-router-dom';
import "./App.css"
import { SlEye } from "react-icons/sl";
// import Faltu_Example from './components/Faltu_Example'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaRegHeart } from "react-icons/fa";
import image1 from "./assets/e1.png"
import image2 from "./assets/e2.png"
import image3 from "./assets/e3.png"
import image4 from "./assets/e4.png"
import image5 from "./assets/e5.png"
import image6 from "./assets/e6.png"
import { BsHeartFill } from "react-icons/bs";
import { createContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from './Redux/Slice';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
export const CartContext = createContext();
import { useContext } from 'react';




function App() {


  const dispatch = useDispatch()
  const { list, error, loading } = useSelector((state) => state.counter);
  console.log(list)
  useEffect(() => {
    dispatch(fetchItems())
  }, [])



  const [data2, setData2] = useState([]);//wholeData
  const [data, setData] = useState([]);//FilterData
  const navigator = useNavigate();
  const { addToWish, wish, setWish, removeToWish } = useContext(CartContext)
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then(res => res.json())
  //     .then(data => {
  //       setData2(data)
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [])


  function filterData(a) {
    console.log({ data2 })
    console.log(a)
    const filterData = data2.filter((ele) => ele?.category === a)
    console.log({ filterData })
    setData(filterData)
  }

  return (
    <>
      <Navbar />

      {/* START  */}

      {/* <Faltu_Example/> */}

      {/* End  */}




      <Grid2 container spacing={2} sx={{ p: "2rem", paddingInline: { xs: "1rem", md: "2rem", lg: "4rem" } }} >
        <Grid2 item size={{ xs: 12, md: 4, lg: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", my: "0.8rem" }}><Typography variant="h6">Woman's Fashion</Typography><FaChevronRight style={{ marginLeft: "3.7rem" }} /></Box>
          <Box sx={{ display: "flex", alignItems: "center", my: "0.8rem" }}><Typography variant="h6">Mens's Fashion</Typography><FaChevronRight style={{ marginLeft: "4.7rem" }} /></Box>

          <Typography variant="h6">Electronics</Typography>
          <Typography variant="h6" sx={{ my: "0.8rem" }}>Home & Lifestyle</Typography>
          <Typography variant="h6" sx={{ my: "0.8rem" }}>Medicine</Typography>
          <Typography variant="h6" sx={{ my: "0.8rem" }}>Sports & Outdoor</Typography>
          <Typography variant="h6" sx={{ my: "0.8rem" }}>Baby's & Toys</Typography>
          <Typography variant="h6" sx={{ my: "0.8rem" }}>Groceries & Pets</Typography>
          <Typography variant="h6" sx={{ my: "0.8rem" }}>Health & Beauty</Typography>
        </Grid2>
        <Grid2 item size={{ xs: 12, md: 8, lg: 8 }}>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 1000, // Change slide every 3 seconds
              disableOnInteraction: false, // Keeps autoplay running even after user interaction
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide> <Cart23 /></SwiperSlide>
            <SwiperSlide> <Cart23 /></SwiperSlide>
            <SwiperSlide> <Cart23 /></SwiperSlide>
            <SwiperSlide> <Cart23 /></SwiperSlide>
            <SwiperSlide> <Cart23 /></SwiperSlide>
            <SwiperSlide> <Cart23 /></SwiperSlide>
            <SwiperSlide> <Cart23 /></SwiperSlide>
            <SwiperSlide> <Cart23 /></SwiperSlide>
            <SwiperSlide> <Cart23 /></SwiperSlide>

          </Swiper>
        </Grid2>
      </Grid2>
      <div className="container na overflow-x-auto flex   gap-2 border-black border-2">
        {list && list.map((item) => (
          <div key={item.id} className=" w-[20rem] m-2  relative  border-red-800 border-2  flex flex-shrink-0 flex-col" onClick={() => navigator(`/product/${item.id}`)}> {/* Ensure div has a fixed width */}
            <img
              src={item?.image}
              alt=""
              className="h-[18rem] w-[25rem] object-fit border-black p-12 bg-[#F5F5F5]"
            />
            <button className=' left-0 top-0 absolute rounded-md py-2 m-2 bg-[#DB4444] w-[6rem] font-bold'> - 40 %</button>
            {!(wish?.some((ele) => ele.id === item.id)) ? <FaRegHeart className='font-bold text-3xl absolute  right-4 top-4 ' onClick={(e) => { addToWish(item), e.stopPropagation() }} /> : <BsHeartFill className='text-red-700 font-bold text-3xl  absolute  right-4 top-4' onClick={(e) => { removeToWish(item.id), e.stopPropagation(), console.log(data.id) }} />}

            {/* 
            <FaRegHeart className='absolute right-4 top-4 font-bold text-2xl'
              onClick={(e) => { addToWish(item), e.stopPropagation() }}
            /> */}
            <SlEye className='absolute right-4 top-12 font-bold text-2xl' />
            <p className="na text-md font-bold m-4 border-black">{item?.title}</p>
            <span className="nana text-2xl p-2 rounded-2xl bg-[#DB4444] m-4">${item?.price}</span>
          </div>
        ))}
      </div>
      <Box sx={{ display: "flex", alignItems: "center", gap: "1rem", m: 4 }}>
        <button className=' py-6 px-2 bg-red-400 '></button><p className="na text-[#DB4444] font-bold">Just For You </p>
      </Box>

      <Grid2 container spacing={2} sx={{ m: 20 }}>
        <Grid2 item size={{ xs: 12, md: 6 }} className="flex gap-4">
          <img
            src={image1}
            alt=""
            className="hover:scale-110 hover:rounded-2xl transition duration-300"
            onClick={() => filterData("men's clothing")}
          />


          <img src={image2} alt="" className='hover:bg-red-500  hover:scale-110 hover:rounded-2xl transition duration-300' />
          <img src={image3} alt="" className='hover:bg-red-500  hover:scale-110 hover:rounded-2xl transition duration-300' />
        </Grid2>
        <Grid2 item size={{ xs: 12, md: 6 }} className="flex gap-4">
          <img src={image5} alt="" className='hover:bg-red-500  hover:scale-110 hover:rounded-2xl transition duration-300' />
          <img src={image4} alt="" className='hover:bg-red-500  hover:scale-110 hover:rounded-2xl transition duration-300' />
          <img src={image6} alt="" className='hover:bg-red-500  hover:scale-110 hover:rounded-2xl transition duration-300' />
        </Grid2>
      </Grid2>

      <Footer />
    </>
  )
}

export default App