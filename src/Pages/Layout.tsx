import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout:React.FC = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  )
}

export default Layout