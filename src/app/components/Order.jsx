"use client"

import { useSelector } from 'react-redux'



const Order = () => {

const totalamount = useSelector((store)=>store?.cart?.Cart_array);





const totalPrice = totalamount.reduce((total, item) => {
  return total + item.totalprice;
}, 0);





  return (
        <div className='flex justify-center'>
        <div className='flex flex-col shadow-lg w-[500px] mt-[50px] p-2 rounded-lg ml-[20px]'>

            <div className='flex flex-col justify-center'>
               <div className='flex justify-between mt-4'>

                <p className='font-medium text-[19px]'>Total Amount</p>
                <p className='font-bold text-[19px]'>Rs - {totalPrice}</p>
              
               </div>
              <div className='flex justify-center mt-[20px]'>

              <button className='bg-green-400 text-white font-bold w-[80%] rounded-md h-[40px]'>Place Order</button>
              </div>
            </div>   


        </div>
      </div>
  )
}

export default Order