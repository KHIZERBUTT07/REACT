import React, { useEffect, useState } from 'react';
import { Box, Button, CircularProgress, TextField, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Header from './components/Header';
import { Masonry } from '@mui/lab';

function App() {

const  [images , setImages] = useState([])
const  [loading , setLoading] = useState(true)

useEffect(()=>{
  getImagesFromUnsplash();
},[])

const  getImagesFromUnsplash = ()=>{
  fetch('https://api.unsplash.com/photos?page=1&client_id=oTO49XdAaqBeNW1n3tO0fOX6Qkhi_tC1UK4NvmQql-Q&per_page=30')
  .then((res)=>res.json())
  .then((res) => {
    setImages(res);
  setLoading(false);
})
.catch((err) => setLoading(false))
};

  return (
    <div>
      <Header/>
    <div className='container mx-auto'>
      

      {/* <Box
        alignItems="center"
        justifyContent="space-between"
        display="flex"
        flexDirection="row"
        bgcolor="lightgreen"
        padding="15px"
        fontWeight="bold"
        marginInline={20}
        borderRadius={3}
      >
        <Typography
          fontWeight="bold"
          sx={{
            textDecorationLine: "underline",
          }}
        >
          Image Gallery
        </Typography>
        <Button
          startIcon={<AccountCircleOutlinedIcon />}
          variant="outlined"
          color="primary" // Changed from "white" to "primary"
        >
          Login
        </Button>
      </Box> */}

     
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="15px" 
        // marginInline={20} 
        marginTop={2}
        marginBottom={2}
        gap={2}
      >
        <TextField
          id="outlined-basic"
          label="Search Your Images"
          fullWidth
          variant="outlined"
          color="secondary"
        />
        <Button
          endIcon={<SearchOutlinedIcon />}
          variant="outlined"
          color="secondary"
      
          sx={{
            
             padding:1.8

          }}
        >
          Search
        </Button>
      </Box>

      {
        loading ?
        <Box sx={{
          display:'flex',
           justifyContent:'center',
            alignItems:'center',
            margin:10,
        }}>
          <CircularProgress color='secondary' size={50} />

        </Box> :null
      }

      <Masonry 
      columns={{sm:1 , md:2 , lg:3 , xl:4}}
      spacing={2}
      >
        {
          images.map((item)=>(
          <img key={item.id} src={item.urls.regular} />
        )) }
      </Masonry>
      </div>
      </div>
  );
}

export default App;
