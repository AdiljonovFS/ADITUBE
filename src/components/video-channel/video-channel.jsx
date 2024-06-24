import { CheckCircle } from '@mui/icons-material'
import { Box, CardContent,CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const VideoChannel = ({video}) => {
  return (
    <Box sx={{
        boxShadow: 'none',
        borderRadius:"20px",
        display:"flex",
        alignItems: 'center',
        justifyContent: 'center',
        height:"320px",
        width:{xs:'356px', md:'320px'},
        margin:"auto",
    }}>
        <Link to={`/channel/${video?.id?.channelId ? video?.id?.channelId : video?.id}`}>
            <CardContent 
                sx={{
                    display:"column",
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}>
                <CardMedia 
                    image={video?.snippet?.thumbnails?.default?.url} 
                    alt={video?.snippet?.title} 
                    sx={{
                        borderRadius:"50%",
                        height:"180px",
                        width:"180px",
                        mb:2,
                        border:`1px solid #e3e3e3`,
                    }}/>
                    <Typography variant='h6' fontWeight={"bold"}>
                        {video?.snippet?.title}
                        <CheckCircle 
                            sx={{
                                fontSize:"12px", 
                                color:"gray", 
                                ml:"5px", 
                            }}/>
                    </Typography>
                    {video?.statistics?.subscriberCount && (
                        <Typography variant='subtitle2'sx={{
                            fontSize:"15px",
                            fontWeight:500 ,
                            color:"gray", 
                        }}>
                            {parseInt(video?.statistics?.subscriberCount).toLocaleString("en-US")}{' '} Subscriber
                        </Typography>
                    )}
            </CardContent>
        </Link>
    </Box>
  )
}

export default VideoChannel