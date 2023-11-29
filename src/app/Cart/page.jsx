import React from 'react'
import Navbar from "../components/Navbar"
import Cart from "../../app/components/Cart"
import Order from "../components/Order"

const page = () => {
  return (
    
    <div className='flex flex-col'>
    
       
        <div className='flex w-full h-full mt-[20px] justify-center flex-col align-middle items-center'>


          <Cart/>
        
        </div>
       
    </div>
   
  )
}

export default page