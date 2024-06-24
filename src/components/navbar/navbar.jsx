import { Box, Stack } from '@mui/material'
import React from 'react'
import { colors } from '../../constants/colors'
import SearchBar from '../search-bar/search-bar'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Stack 
        direction={"row"} 
        alignItems={"center"} 
        justifyContent={"space-between"} 
        p={2} 
        sx={{position:'sticky', top:0, zIndex:999, backgroundColor: colors.primary }}>
        <Link to="/">
            ADI
        </Link>
        <SearchBar/>
    </Stack>
  )
}

export default Navbar