import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import { ApiServices } from "../../service/api.services";
import { Box, Container } from "@mui/material";
import VideoChannel from "../video-channel/video-channel";
import { Videos } from "..";

const Channel = () => {
    const [channelDetails, setChannelDetails] = useState()
    const [channelVideos, setChannelVideos] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        const  getData = async () => {
			try {
				const data = await ApiServices.fetching(`channels?part=snippet&id=${id}`)
				setChannelDetails(data.items[0])
                console.log(data);
                const dataVideosChannel = await ApiServices.fetching(`search?channelId=${id}&part=snippet%2Cid&order=date`)
                // console.log("chaneel ",dataVideosChannel);
                setChannelVideos(dataVideosChannel?.items)
                setChannelVideos(dataVideosChannel?.items)
                setChannelVideos(dataVideosChannel?.items)
			} catch (error) {
				console.log(error)
			}
		}
		getData()
    },[id])

    
    return (
        <Box minHeight={'95vh'} mt={'10vh'}>
            <Box>
                <Box
                    width={'100%'}
                    height={'30vh'}
                    zIndex={10}
                    sx={{backgroundImage:`url(${channelDetails?.brandingSettings?.image?.bannerExternalUrl})`,
                    backgroundSize:'cover',
                    backgroundPosition:'center',
                    backgroundRepeat:'no-repeat',
                    objectFit: 'cover',
                    position:'relative'
                }}
                />
                <VideoChannel video={channelDetails}/>
            </Box>
            <Container maxWidth={'90%'}>
                <Videos videos={channelVideos}/>
            </Container> 
        </Box>
    )
}
export default Channel;
