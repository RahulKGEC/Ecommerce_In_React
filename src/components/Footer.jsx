import React from 'react'
import { Typography, Grid2, Button, Box, TextField } from '@mui/material';
import { AiOutlineSend } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import image1 from "../assets/apple.png"
import image2 from "../assets/GooglePlay.png"
import image3 from "../assets/Qrcode.png"

function Footer() {
    return (
        <>
            <Box style={{ background: "black", color: "white", }}>
                <Grid2 container spacing={10} sx={{display:"flex",justifyContent:{xs:"center"},padding:{xs:"1rem",md:"2rem",lg:"4rem"}}}>

                    <Grid2 size={{xs:12,md:3,lg:3}}>
                        <Typography variant="h5" sx={{fontSize:{md:"1.5rem",xs:"1rem",lg:"1.7rem"}, fontWeight:"bold" ,textAlign:{xs:"center",md:"left",lg:"left"}}}>Exclusive</Typography>
                        <Typography variant="body1" sx={{fontWeight:"bold" ,mt:"1rem" ,textAlign:{xs:"center",md:"left",lg:"left"}}}>Subscribe</Typography>
                        <Typography variant="body1" sx={{mt:"1rem",textAlign:{xs:"center",md:"left",lg:"left"}}}>Get 10% off your first order </Typography>
                        <Box style={{ color: "white", display: "flex", border: "2px solid white", padding: "5px" }} sx={{mt:"1rem",textAlign:{xs:"center",md:"left",lg:"left"}}}>
                            <input type="text" placeholder="Email" style={{ flex: 1, outline:"none"}} />
                            <AiOutlineSend style={{color:"blue",fontSize:"1.5rem"}} />
                        </Box>
                    </Grid2>

                    <Grid2 size={{xs:12,md:2,lg:2}}>
                        <Typography variant="h5" sx={{fontSize:{md:"1.5rem",xs:"1rem",lg:"1.7rem"}, fontWeight:"bold" ,textAlign:{xs:"center",md:"left",lg:"left"}}}>Support</Typography>
                        <Typography variant="body1"sx={{mt:"1rem",textAlign:{xs:"center",md:"left",lg:"left"}}}>111 Bijoy Sarani, Dhaka, DH 1515,Bangladesh</Typography>
                        <Typography variant="body1"sx={{mt:"1rem",textAlign:{xs:"center",md:"left",lg:"left"}}}>exclusive@gmail.com</Typography>
                        <Typography variant="body1"sx={{mt:"1rem",textAlign:{xs:"center",md:"left",lg:"left"}}}>+88015-88888-9999</Typography>
                    </Grid2>

                    <Grid2  item size={{xs:12,md:2,lg:2}}>
                        <Typography variant="h5" sx={{fontSize:{md:"1.5rem",xs:"1rem",lg:"1.7rem"}, fontWeight:"bold" ,textAlign:{xs:"center",md:"left",lg:"left"}}}>Account</Typography>
                        <Typography variant="body1" sx={{mt:"1rem",textAlign:{xs:"center",md:"left",lg:"left"}}}>My Account</Typography>
                        <Typography variant="body1" sx={{mt:"1rem",textAlign:{xs:"center",md:"left",lg:"left"}}}>Login/Register</Typography>
                        <Typography variant="body1" sx={{mt:"1rem",textAlign:{xs:"center",md:"left",lg:"left"}}}>Cart</Typography>
                        <Typography variant="body1" sx={{mt:"1rem",textAlign:{xs:"center",md:"left",lg:"left"}}}>Whishlist</Typography>
                        <Typography variant="body1" sx={{mt:"1rem",textAlign:{xs:"center",md:"left",lg:"left"}}}>Shop</Typography>
                    </Grid2>
                    <Grid2  size={{xs:12,md:2,lg:2}}>
                        <Typography variant="h5" sx={{fontSize:{md:"1.5rem",xs:"1rem",lg:"1.7rem"}, fontWeight:"bold" ,textAlign:{xs:"center",md:"left",lg:"left"}}}>Quick link</Typography>
                        <Typography variant="body1" sx={{mt:"1rem",textAlign:{xs:"center",md:"left",lg:"left"}}}>Privacy Policy</Typography>
                        <Typography variant="body1" sx={{mt:"1rem",textAlign:{xs:"center",md:"left",lg:"left"}}}>Terms Of Use</Typography>
                        <Typography variant="body1" sx={{mt:"1rem",textAlign:{xs:"center",md:"left",lg:"left"}}}>FAQ</Typography>
                        <Typography variant="body1" sx={{mt:"1rem",textAlign:{xs:"center",md:"left",lg:"left"}}}>Contact</Typography>
                        {/* <Typography variant="body1">Shop</Typography> */}
                    </Grid2>
                    <Grid2  size={{xs:12,md:3,lg:3}} sx={{display:"flex",flexDirection:"column",alignItems:"center "  }}>
                        <Typography variant="h5" sx={{fontSize:{md:"1.5rem",xs:"1rem",lg:"1.7rem"}, fontWeight:"bold"}}>Download App</Typography>
                        <Typography variant="body1" sx={{mt:"1rem",fontSize:{md:"0.8rem",xs:"0.6rem"}}}>Save 53 with App New User Only</Typography>
                        <Box sx={{ display: "flex" ,p:"0.6rem", pl:"0rem",gap:"0.6rem"}}>
                            <img src={image3}></img>
                            <Box sx={{}}>
                                <img src={image1} ></img>
                                <img src={image2} style={{marginTop:"0.3rem"}}></img>
                            </Box>
                        </Box>
                        <Box sx={{mt:"1rem", display: "flex",justifyContent:"flex-start",gap:"1.7rem" }}>
                            <FaFacebookF /> <FiTwitter /> <FaInstagram /> <FaLinkedinIn />
                        </Box>
                    </Grid2>
                </Grid2>
            </Box>

        </>
    )
}

export default Footer