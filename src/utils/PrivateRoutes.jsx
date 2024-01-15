import React, { useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

function PrivateRoutes() {
    let isAuthenticated = localStorage.getItem('token');
  return (
    isAuthenticated ? <Outlet /> : <Navigate to="/login"/>
  )
}

export default PrivateRoutes