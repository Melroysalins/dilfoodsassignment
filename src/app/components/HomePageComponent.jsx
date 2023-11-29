import React from 'react'
import ShoeSection from "../components/ShoeSection"
import Navbar from './Navbar'
const HomePageComponent = () => {
  return (
    <div className='flex flex-col'>
      <Navbar data={true}/>
       <ShoeSection/>
        </div>
  )
}

export default HomePageComponent