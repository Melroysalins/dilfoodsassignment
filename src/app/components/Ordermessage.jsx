"use client"
import { useRouter } from 'next/navigation'

import React from 'react'

import {MdOutlineVerified} from "react-icons/md"

const Ordermessage = () => {
    const router = useRouter()
 
    setTimeout(() => {
   
       router.push("/")
       
    }, 900);
    
     return (
       <div className='flex justify-center mt-[100px]'>
   
           <div className='shadow-lg w-[400px] h-[200px] border-slate-400 flex justify-center align-middle items-center'>
   
               <div className='flex p-2 items-center gap-10'>
   
               <h1 className='text-[35px] text-green-400 font-semibold'>Order Successful</h1>
               </div>
   
               <div>
   
                   <MdOutlineVerified className='text-[25px] text-green-500'/>
               </div>
   
   
           </div>
          
       </div>
     )
}

export default Ordermessage