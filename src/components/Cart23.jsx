import React from 'react'
import { Box, Grid2, Typography } from '@mui/material'
import image1 from "../assets/hero.png"
import image2 from "../assets/appleji.png"
// import { FaChevronRight } from "react-icons/fa";
import { LuArrowRight } from "react-icons/lu";
function Cart23() {
  return (
    <>
      <Box sx={{ border: "2px solid black", height: "400px", width: "100%", backgroundColor: "black", color: "white" }}>
        <Grid2 container spacing={2}>
          <Grid2 item size={{ xs: 6, md: 6, lg: 6 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}><img src={image2} alt="" /> <Typography variant="h6">Up to 10% off Voucher</Typography> </Box>
            <Typography variant="h3">Up to 10% off Voucher</Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}><span className='border-b-2 text-xl '>Shop Now </span> <LuArrowRight className='text-2xl ml-2' /></Box>
          </Grid2>
          <Grid2 item size={{ xs: 6, md: 6, lg: 6 }}>
            <img src={image1} alt="" />
          </Grid2>
        </Grid2>
      </Box>
    </>
  )
}

export default Cart23