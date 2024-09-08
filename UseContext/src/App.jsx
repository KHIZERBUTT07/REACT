import axios from 'axios';
import React, { useEffect } from 'react'

function App() {

  
  useEffect(() => {
    console.log("Fetching products...");
    const url = 'https://dummyjson.com/products'
      
    axios
      .get(url)
      .then((res) => {
        console.log("Products fetched:", res.data);
        // setProducts(res.data); // API returns an array of products
        
      })
    
  }, []);
  return (
    <div>
      
    </div>
  )
}

export default App
