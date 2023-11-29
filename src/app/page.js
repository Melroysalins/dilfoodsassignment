"use client"

import { Provider } from 'react-redux'
import {appstore} from "../Appstore"
import Navbar from './components/Navbar'
import HomePageComponent from "../app/components/HomePageComponent"

export default function Home() {

  return (

   
      <div className='flex flex-col'>
     
        <HomePageComponent/>
      </div>
   
      
     
     
  )
}
