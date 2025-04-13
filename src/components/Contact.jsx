import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Box, Grid2 } from '@mui/material'
import image4 from "../assets/icons-phone.png"
import image5 from "../assets/icons-mail.png"

function Contact() {
    return (

        <>
            <Navbar />

            <Box sx={{ padding: { xs: "2rem", md: "2rem", lg: "4rem" }, }}><span className='font-light pr-2'>Home </span><span> /</span><span className='font-boldF pl-2'>   Contact</span></Box>
            <Grid2 container spacing={2} sx={{display:"flex", justifyContent:"center", m:"2rem",paddingInline:{xs:"1rem",md:"2rem",lg:"4rem"}}} >
                <Grid2 item size={{ xs: 12, md: 4, lg: 4 }} sx={{ padding: { xs:"2rem",md:"3rem",lg:"4rem"}, boxShadow: "rgba(0, 0, 0, 0.35) 0px 3px 20px" }}>

                    <div className="pa flex items-center gap-4 font-bold "><img src={image4} alt="" /><p className="paa">Call   To Us </p> </div>
                    <p className="paa py-4">We are available 24/7 , 7 days</p>
                    <p className="paap pb-4">Phone : +88015-88888-9999</p>
                    <hr className='opacity-50' />
                    <div className="pa flex items-center gap-4 font-bold  my-8"><img src={image5} alt="" /><p className="paa">Write To US </p> </div>
                    <p className="paa pb-4">Fill out our form and we will contact you within 24 hours</p>
                    <p className="paap pb-4">Phone : +88015-88888-9999</p>

                </Grid2>
                <Grid2 item size={{ xs: 12, md: 7, lg: 7 }} sx={{ padding:{xs: "2rem 1rem 2rem 1rem",md:"3rem 2rem 3rem 2rem"},   boxShadow: "rgba(0, 0, 0, 0.35) 0px 3px 20px"}}>

                    <Grid2 container spacing={3}>
                        <Grid2 item size={{ xs: 12, md: 4 }} >   <input type="text" placeholder='Your Name *' className='w-full p-4 outline-none bg-[#F5F5F5] ' required /></Grid2>
                        <Grid2 item size={{ xs: 12, md: 4 }} > <input type="text" placeholder='Your Email *' className='w-full p-4 outline-none bg-[#F5F5F5]' required /></Grid2>
                        <Grid2 item size={{ xs: 12, md: 4 }}>  <input type="text" placeholder='Your Phone *' className='w-full p-4 outline-none bg-[#F5F5F5]' required /></Grid2>
                    </Grid2 >

                    <Box > <input type="text" placeholder='Subject *' className='w-full p-4 outline-none bg-[#F5F5F5] h-[10rem] mt-4' required /></Box>
                <Box className='mt-4 flex justify-end' sx={{}}>
                    <button className=' px-10 rounded-md py-3 m-4 bg-[#DB4444]'>Send Message</button>
                </Box>
                </Grid2 >


            </Grid2 >



            <Footer />
        </>
    )
}

export default Contact