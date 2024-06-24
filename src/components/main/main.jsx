import React, { useState, useEffect } from "react";
import {Box, Container, Stack, Typography} from "@mui/material"
import Category from "../categoroy/category";
import {colors} from '../../constants/colors'
import { Home } from "@mui/icons-material";
import Videos from "../videos/videos";

import { ApiServices } from "../../service/api.services";



const Main = () => {
    const [selectedCatigory, setSelectedCatigory ]= useState('New')
    const [selectedIcon, setSelectedIcon] = useState(<Home/>)
    const selectedCatigoryHandle = (category)=>setSelectedCatigory(category)
    const selectedIconHandle = (icon)=>setSelectedIcon(icon)

    const [videos, setVideos]= useState([])

    useEffect(()=>{
        const getData = async ()=>{
            try{
                const data = await ApiServices.fetching(`search?part=snippet&q=${selectedCatigory}`)
                setVideos(data.items)
            }catch(eror){
                console.log(eror);
            }
                
        }
        getData()
        // ApiServices.fetching('search').then(data=>setVideos(data))
    },[selectedCatigory])

    return (
        <Stack>
            <Category 
                selectedCatigoryHandle = {selectedCatigoryHandle} 
                selectedCatigory= {selectedCatigory}
                selectedIconHandle = {selectedIconHandle}
                />
            <Box p={2} sx={{height: '90vh'}}>
                <Container maxWidth={'90%'}>
                        <Typography variant="h4" fontWeight={"bold"} mb={2}>
                         {selectedCatigory} {selectedIcon}  <span style={{color: colors.secondary} }>Videos</span>
                        </Typography>
                    <Videos videos={videos}/>
                </Container>
            </Box>
        </Stack>
)
}
export default Main;
