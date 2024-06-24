import { Stack } from '@mui/material'
import React from 'react'
import {category} from '../../constants'
import { colors } from '../../constants/colors'

const Category = ({selectedCatigoryHandle, selectedCatigory, selectedIconHandle } ) => {

  return (
    <Stack direction={"row"} sx={{overflowX:'scroll'}}>
      {category.map(item=>(
          <button 
            key={item.name} 
            className='category-btn' 
            style={{
              borderRadius: '0', 
              background:item.name === selectedCatigory && colors.secondary,
              color: item.name === selectedCatigory && "white"}} 
            onClick={()=>{
                selectedIconHandle(item.icon);
                selectedCatigoryHandle(item.name)}}
            >

            <span style={{color:item.name === selectedCatigory ? '#fff' :colors.secondary , marginRight:"15px"}}>{item.icon}</span>
            <span style={{opacity:'1' }}>{item.name}</span>
          </button>
      ))}
    </Stack>
  )
}

export default Category