import React from 'react'
import { Typography, Grid2, Button, Box, TextField } from '@mui/material';
import {NavLink} from "react-router-dom"


function UpperNavbar() {
  return (
   <>
   <Box className='upperNavbar text-white bg-black flex  p-4 justify-between px-[10%]' >
    <Typography variant='body1' sx={{fontSize:{xs:"0.7rem",md:"1rem",lg:"1.3rem"}}}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
         <NavLink to="/shop" className="font-bold px-2 underline">Shop Now</NavLink>
    </Typography>

<select id="cars" name="cars"  className='outline-none text-white bg-black'>
  <option value="volvo">Hindi</option>
  <option value="bmw">French</option>
  <option value="audi">Arabi</option>
  <option value="mercedes">Spanish</option>
</select>
</Box>
   
   
   
   </>
  )
}

export default UpperNavbar