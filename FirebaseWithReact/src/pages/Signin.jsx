import React from 'react'
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";

function Signin() {
  return(
    <div className='my-10 '>
        <form >
        <Input
      isRequired
      type="email"
      label="Email"
      size={'lg'}
      defaultValue="junior@nextui.org"
      className="max-w-xs"
    />

        <Input
      isRequired
      type="password"
      label="Password"
      defaultValue="junior@nextui.org"
      className="max-w-xs"
    />
     <Button color="primary">
        Login
      </Button>  
        </form>
    </div>
  )
   
}

export default Signin
