import {useState, useEffect} from 'react'
import { ApiServices } from '../../service/api.services';
import { Box, Container, Typography } from '@mui/material';
import { Videos } from '..';
import { colors } from '../../constants/colors';
import { useParams } from 'react-router-dom';


const Search = () => {
  const [videos, setVideos] = useState([]);

  const {id} = useParams()
  useEffect(() => {
    const getData = async ()=>{
      try{
          const data = await ApiServices.fetching(`search?part=snippet&q=${id}`)
          setVideos(data.items)
      }catch(eror){
          console.log(eror);
      }
  }
  getData()
  }, [id]);

  return (
    <Box p={2} sx={{height:'90vh'}}>
      <Container  maxWidth={'90%'}>
        <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
          Search Reasult for <span style={{color:colors.secondary}}>{id}</span>
        </Typography>
        <Videos videos ={videos}/>
      </Container>
    </Box>
  )
}

export default Search