import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Box } from '@mui/material'
import { NavLink } from 'react-router-dom'

function Error() {
    return (



        <>
            <Navbar />
            <Box sx={{ padding: { xs: "2rem", md: "4rem", lg: "4rem" } }}><span className='font-light pr-2'>Home </span><span> /</span><span className='font-boldF pl-2'>   Contact</span></Box>
            <p className="pap font-bold text-6xl text-center m-4">404 Not Found</p>
            <p className="add text-center m-4">Your visited page is not found,You may go home page</p>
            <Box sx={{ display: "flex", justifyContent: "center", m: "2rem" }}>
                <button className=' px-10 rounded-md py-3 m-4 bg-[#DB4444]'><NavLink to="/">Back to home page </NavLink></button>
            </Box>
            <Footer />
        </>
    )
}

export default Error