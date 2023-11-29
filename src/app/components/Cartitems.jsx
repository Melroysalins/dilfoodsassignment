import Image from 'next/image';
import React from 'react'
import { useDispatch } from 'react-redux';
import { DecrementQuantity, IncrementQuantity, Remove_From_Cart } from '../../Cartslice';

const Cartitems = (data) => {

    const {Id , Name,Subname,Price,quantity,image,totalprice} = data;

    const disptach = useDispatch();


    const handleRemoveItem = () => {

        disptach(Remove_From_Cart(Id))
    }

    
  return (
    <div className='flex flex-col w-full mt-[30px] borderbottom'>

    <div className='flex flex-col'>
    <div className='flex mt-[13px] w-full p-1 items-center justify-between'>

        <div className='flex w-[100px] rounded ml-[5px] max-sm:w-[70px]'>

            <Image src={image} 
            alt='' width={100} height={100} className='rounded cursor-pointer select-none'/>
        </div>

        <div className='flex flex-col'>

            <h4 className='font-semibold max-sm:text-[12px]'>{Name}</h4>
            <p className='font-medium opacity-50 text-[14px] max-sm:text-[12px]'>{Subname}</p>
            <p>Rs - {totalprice}</p>

        </div>

        <div className='flex flex-col'>

        <div className='flex items-center justify-between'>

            <button className='font-semibold text-[20px] cursor-pointer bg-slate-600 text-white w-[40px] rounded-md max-sm:w-[20px]' onClick={()=>disptach(IncrementQuantity(Id))}>+</button>
            <span className='font-medium ml-2'>{quantity}</span>
            <button className=' ml-2 font-semibold text-[20px] cursor-pointer bg-slate-600 text-white w-[40px] rounded-md  max-sm:w-[20px]' onClick={()=>disptach(DecrementQuantity(Id))}>-</button>

        </div>

      

        </div>

    </div>

    <div className='flex w-full justify-end mb-[2px]'>

        <button className='mr-[20px] bg-red-600 text-white font-bold w-[80px] rounded-md shadow-sm' onClick={()=>handleRemoveItem()}>Remove</button>
    </div>

    </div>

        </div>
  )
}

export default Cartitems