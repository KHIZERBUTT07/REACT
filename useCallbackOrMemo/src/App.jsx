import { useCallback, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



  // reduce method of array:


  // let arr = [1,10,20,30,50]
  // arr.reduce((accumulator, item)=>{
  //   console.log( "accumulator =>" ,accumulator)
  //   console.log("item",item)
  //   console.log(accumulator + item)
  
  //   return(accumulator + item)
  // },1)


function App() {


  // UseMemo:  it works on value we use this to run value one time.
  const randomNumber = useMemo(() => Math.floor(Math.random() * 10),[]) // empty array is dependency arr it means it will run 1st tme after rerendering or  ager dep array ma kuch pass krenga aur jb wo change hoga to ye chl jaega.

  console.log("random number =>",randomNumber);
  
  // useCallback:  it works on function we use this to run function one time or useCallback func ko cache krlega.
   const abc =  useCallback(()=>{},[]) 
   console.log("abc")



  // jb bhi state change hoti hai ye child bhi rerender krta ha.

  // return (
    
     
  // )
}

export default App
