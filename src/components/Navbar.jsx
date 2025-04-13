
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { RiSearchLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline, IoStarOutline } from "react-icons/io5";
import { LuUser, LuShoppingBag } from "react-icons/lu";
import { TbLogout2 } from "react-icons/tb";
import { Box } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../App";

const Navbar = () => {
    const navigate = useNavigate();
    const [option, setOption] = useState(false);
    const [menu, setMenu] = useState(false);
    const {cart,wish} = useContext(CartContext);

    const signUpFun = () => {
        navigate("/signup");
    };

    return (
        <div className="max-w-7xl mx-auto xs:px-5">
            <div className="flex justify-between items-center px-2 py-4">
                <div>
                    <h1 className="font-bold text-3xl" onClick={()=>navigate("/checkout")}> Exclusive</h1>
                </div>
                
                <div className="hidden lg:block">
                    <nav className="flex gap-8">
                        <Link to="/" className="hover:text-red-500">Home</Link>
                        <Link to="/contact" className="hover:text-red-500">Contact</Link>
                        <Link to="/about" className="hover:text-red-500">About</Link>
                        <Link to="/signup" className="hover:text-red-500">Sign Up</Link>
                    </nav>
                </div>

                <div className="flex gap-4 items-center">

                    <div className="hidden md:flex bg-gray-100 w-72 h-10 items-center px-2 rounded-md">
                        <input type="text" placeholder="What are you looking for?" className="flex-1 bg-transparent text-sm outline-none px-2" />
                        <button><RiSearchLine /></button>
                    </div>


                    <div className="flex items-center gap-4 relative">
                        <Link to="/wishlist" className="text-2xl"><CiHeart  /><Box className=" flex items-center justify-center "><p className=" absolute -top-0 -left-1 text-sm font-bold  bg-red-600 h-5 w-4 rounded-[50%] px-1 -py-1 ">{wish.length}</p> </Box> </Link>
                        <Link to="/cart" className="text-2xl"><IoCartOutline /><Box className=" flex items-center justify-center "><p className=" absolute -top-0 left-8 text-sm font-bold  bg-red-600 h-5 w-4 rounded-[50%] px-1 -py-1 ">{cart.length}</p> </Box></Link>


                        <div className="relative" onMouseEnter={() => setOption(true)} onMouseLeave={() => setOption(false)}>
                            <div className="text-2xl hover:bg-red-500 p-2 rounded-full">
                                <LuUser />
                            </div>

                            {option && (
                                <div className="absolute top-8 right-0 mt-2 text-[#fff] backdrop-blur-2xl shadow-md rounded-md p-2 w-60 z-10">
                                    <ul>
                                        <li className="p-2 cursor-pointer flex items-center gap-4" onClick={() => navigate('/profile')}>
                                            <LuUser />
                                            <Link to="/profile">Manage My Account</Link>
                                        </li>
                                        <li className="p-2 cursor-pointer flex items-center gap-4" onClick={() => navigate('/order')}>
                                            <LuShoppingBag />
                                            <Link to="/order">My Order</Link>
                                        </li>
                                        <li className="p-2 cursor-pointer flex items-center gap-4" onClick={() => navigate('/cancellations')}>
                                            <GiCancel />
                                            <Link to="/cancellations">My Cancellations</Link>
                                        </li>
                                        <li className="p-2 cursor-pointer flex items-center gap-4" onClick={() => navigate('/reviews')}>
                                            <IoStarOutline />
                                            <Link to="/reviews">My Reviews</Link>
                                        </li>
                                        <button className="p-2 w-full text-left flex items-center gap-4" onClick={signUpFun}>
                                            <TbLogout2 />
                                            Logout
                                        </button>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>


                <div className="lg:hidden block relative">
                    <button className="text-3xl" onClick={() => setMenu(!menu)}>
                        {menu ? <GiCancel /> : <GiHamburgerMenu />}
                    </button>

                    {menu && (
                        <div className="absolute right-0 top-12 bg-white shadow-lg w-44 rounded-md p-4 z-20 flex flex-col gap-4">
                            <Link to="/" className="hover:text-red-500" onClick={() => setMenu(false)}>Home</Link>
                            <Link to="/contact" className="hover:text-red-500" onClick={() => setMenu(false)}>Contact</Link>
                            <Link to="/about" className="hover:text-red-500" onClick={() => setMenu(false)}>About</Link>
                            <Link to="/signup" className="hover:text-red-500" onClick={() => setMenu(false)}>Sign Up</Link>
                        </div>
                    )}
                </div>
            </div>

            <hr className="border-gray-200" />
        </div>
    );
};

export default Navbar;


// // My Navbar Rahul 



// import React from 'react'
// import UpperNavbar from './UpperNavbar'
// import { Grid2, Typography, Box } from '@mui/material'
// import { NavLink } from 'react-router-dom'
// import { CiSearch } from "react-icons/ci";
// import { CiHeart } from "react-icons/ci";
// import { IoCartOutline } from "react-icons/io5";




// function Navbar() {
//   return (
//     <>
//       <UpperNavbar />
      
//       <Grid2 container spacing={2} sx={{paddingY:"1rem",paddingInline:{xs:"1rem",md:"2rem",lg:"4.3rem"} }}>

//         <Grid2 item size={{ xs: 12, md: 3, lg: 3 }}>
//           <NavLink to="/shop"><Typography variant='h5' sx={{fontWeight:"bold", textAlign:{xs:"center",md:"left",lg:"left"}}}>Exclusive</Typography></NavLink>
//         </Grid2>
//         <Grid2 item size={{ xs: 12, md: 4, lg: 4 }} sx={{ display: "flex", justifyContent: "space-between", }}>
//           <NavLink to="/"><Typography variant='h6' className='hover:underline'>Home</Typography></NavLink>
//           <NavLink to="/contact"><Typography variant='h6'className='hover:underline'>Contact</Typography></NavLink>
//           <NavLink to="/about"><Typography variant='h6'className='hover:underline'>About</Typography></NavLink>
//           <NavLink to="/signup"><Typography variant='h6'className='hover:underline'>Sign Up</Typography></NavLink>
//         </Grid2>

//         <Grid2 item size={{ xs: 12, md: 5, lg: 5 }} sx={{ display: "flex",alignItems:"center",justifyContent:{xs:"center",md:"flex-end",lg:"flex-end"}, gap: "1rem" ,paddingRight:"1rem"}}>
//           <span className='flex bg-gray-200 w-fit p-2 rounded-md'>
//             <input
//               type="text"
//               placeholder='What are you looking for'
//               className='outline-none  px-3 py-1'
//             />
//             <CiSearch className='text-4xl  p-1 xs:text-3xl' />
//           </span>
//           <CiHeart className='text-5xl md:text-4xl ' />


//           <IoCartOutline className='text-5xl  md:text-4xl  ' />


//         </Grid2>
//       </Grid2 >
//       <hr  className='opacity-20'/>
//     </>
//   )
// }

// export default Navbar