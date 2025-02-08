import React from 'react'
import {Navbar} from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const DefaultLayout = () => {
  return (
    <>
        <Header/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default DefaultLayout