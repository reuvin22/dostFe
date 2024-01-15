import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoutes() {
    let isAuthenticated = localStorage.getItem('token');
  return (
    isAuthenticated ? <Outlet /> : <Navigate to="/login"/>
  )
}

export default PrivateRoutes