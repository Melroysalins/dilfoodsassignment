"use client"
import Image from 'next/image';
import React from 'react'
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

import{useState} from "react"
import { useSelector } from 'react-redux';
import Cartitems from './Cartitems';
import Order from './Order';

const Cart = () => {

    const [showitems , Setshowitems] = useState(true)

    const cart_Array = useSelector((store)=>store?.cart?.Cart_array)


    if(!cart_Array) return null;
    
  return (
    <div className='flex w-[700px]  flex-col shadow-md max-md:w-[500px] max-sm:w-[420px]'>

        <div className='flex w-full justify-between items-center p-2 border' onClick={()=>(Setshowitems(!showitems))}>

        <h3 className='text-[22px] font-semibold select-none'>Your Orders</h3>
      { showitems ? (<IoIosArrowDropup className='cursor-pointer text-[26px]' />) : (<IoIosArrowDropdown className='cursor-pointer text-[26px]' />)}
        </div>

        {
            showitems &&
                cart_Array.map((ele)=><Cartitems key={ele?.Id} {...ele}/>)
        }

        <Order/>
        
    </div>
  )
}

export default Cart