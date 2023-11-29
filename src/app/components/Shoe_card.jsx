"use client"
import Image from 'next/image'
import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART } from '../../Cartslice';



const Shoe_card = (data) => {

    const {name , subname,img,price,id} = data

    const dispatch = useDispatch();

    const Checkifitempresent = useSelector((store)=>store?.cart?. Cart_array)


    const handleaddtocart = () => {


      dispatch(ADD_TO_CART({

        Id:id,
        Name:name,
        Subname:subname,
        image:img,
        Price:price,
        quantity:1,
        totalprice:price
      }))

      console.log(Checkifitempresent)
    }
 
    return (
        <div className='flex w-[250px] flex-col border-whi p-1 Hovershadow cursor-pointer'>
    
           <div className='flex w-full flex-col'>
            
              <div className='flex  w-full h-full justify-center p-1'>
    
                <Image src={img}
                alt='' width={100} height={100} className='w-[200px]'/>
        
              </div>
    
              <div className='flex flex-col p-3'>
    
              <div className='flex'>
    
              <p className='font-bold text-[17px]'>{name}</p>
    
              </div>
    
              <div className='flex items-center'>
    
              <span className='ml-[3px] text-slate-600 text-[14px]'>{subname}</span>
    
                </div>
    
              <div className='flex flex-col mt-2'>
                
                <span className='text-[16px]  font-semibold'>RS - {price}</span>
                
                
              </div> 

              <div className='flex w-full h-full justify-center'>
                
                    <button className='font-semibold bg-red-700 text-white w-[120px] h-[30px] cursor-pointer rounded-md mt-[16px] ' onClick={()=>handleaddtocart()}>Add to Cart</button>
                
                </div> 
    
              </div>
           
            </div>                
    
        </div>
      )
}

export default Shoe_card