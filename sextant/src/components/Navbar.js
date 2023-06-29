import React from 'react'
import { AppBar, Typography, Toolbar, Tabs, Tab } from '@mui/material'


function Navbar() {
    const [value, setValue] = React.useState(0);
  return (
    <>
        <AppBar style={{background:"#ffffff"}}>
            <Toolbar>
                <Typography component={'span'} style={{color:"black", fontFamily:"cursive"}}>
                    <p style={{fontSize:"26px", paddingRight:"50px"}}>SEXTANT</p>
                </Typography>
                <Tabs value={value} sx={{ padding:"auto"}} >
                    <Tab label = "service"/>
                    <Tab label = "projects"/>
                    <Tab label = "about us"/>
                </Tabs>

                <Tabs value={value} sx={{marginLeft:"auto"}}>
                    <Tab label = "log in"/>
                    <Tab label = "sin up"/>
                </Tabs>
            </Toolbar>
        </AppBar>
        <h1>Sextant</h1>
    </>
  )
}

export default Navbar