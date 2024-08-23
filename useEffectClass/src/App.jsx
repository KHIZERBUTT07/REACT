

// useEffect: it is use to contact with third party and it is normally use with useState or we can also call it for changing state.
// useMemo: it is used to fetch cathe value.
// useCallback: it is used to fetch function value.

import { useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";

 function App(){

  const [post,setPost] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => setPost(data));
  },[])

  const filteredArr = post.filter(
    (data) => data.title.toLowerCase().indexOf(search.toLocaleLowerCase()) !== -1
  );

 return(

<div>
  <h1>Posts</h1>
  <input type="search" placeholder="search" onChange={(e) => setSearch(e.target.value)} style={
    {
      margin:10,
      color:"#000",
      height:50,
      width:400,
    }
  }/>
</div> 
 )
}
 export default App