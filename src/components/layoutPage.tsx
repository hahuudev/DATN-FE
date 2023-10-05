import React from 'react'
import { HeaderPage } from './Headerpage/HeaderPage'
import { Outlet } from 'react-router-dom'
import Footer from './footer/footer'

const LayoutPage = () => {
  return (
    <>
          <HeaderPage/>
          <Outlet/>
          <Footer/>
    </>
  )
}

export default LayoutPage