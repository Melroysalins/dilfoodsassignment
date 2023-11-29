import React from 'react'


import { Data_array } from '../../../Utils/Datas'
import Link from 'next/link'


import Shoe_card from "./Shoe_card"


const ShoeSection = () => {

 
  return (

    <div className='flex flex-col'>

        <div className='flex w-full  mt-[30px] p-3'>
            <h2 className='font-bold text-[24px]'>MENS Sneakers</h2>
        </div>

        <div className='flex flex-col w-[100%]  mt-[30px] p-2'>

            <div className='gridcontainner'>
              {

                  Data_array.map((ele)=><Shoe_card key={ele?.id} {...ele}/>)
              }
            </div>

        </div>

    </div>
  )
}

export default ShoeSection