import React from 'react';
import { Box, Button, TextField, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header/>
    <div className='container mx-auto'>
      {/* First Box */}
      <Box
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
      </Box>

      {/* Second Box */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="15px" 
        marginInline={20} 
        gap={2}
      >
        <TextField
          id="outlined-basic"
          label="Search Your Images"
          fullWidth
          variant="outlined"
        />
        <Button
          endIcon={<SearchOutlinedIcon />}
          variant="outlined"
          color="primary"
      
          sx={{
            
             padding:1.8

          }}
        >
          Search
        </Button>
      </Box>
      </div>
      </div>
  );
}

export default App;
