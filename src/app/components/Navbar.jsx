
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Navbar = ({data}) => {

  const cartlength = useSelector((store)=>store?.cart?.Cart_array)

  const router = useRouter(); 

  return (
    <div className='flex w-[100%] h-[70px] shadow-lg p-4 items-center justify-between bg-red-600 text-white'>   

        <div className='flex w-[200px]'>

            <h2 className='font-bold font-sans text-[22px] text-white cursor-pointer  bg-none max-sm:text-[15px]'>Ecommerce App</h2>

        </div>

       { data && (<div className='flex w-[400px]  p-1  items-center justify-end mr-[3px]'>

       <FaShoppingCart className='text-[21px] cursor-pointer' onClick={()=>router.push("/Cart")}/>

         <span className='ml-[4px]'>- {cartlength.length} </span>   
            
        </div>)}

    </div>
  )
}

export default Navbar