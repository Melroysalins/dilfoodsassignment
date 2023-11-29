"use client"
import React from 'react'
import { Provider } from 'react-redux'
import {appstore} from "../src/Appstore"

const Reduxwrapper = ({children}) => {
  return (
    <Provider store={appstore}>

        {children}
    </Provider>
  )
}

export default Reduxwrapper