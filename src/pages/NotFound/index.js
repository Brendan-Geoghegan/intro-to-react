import React from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function NotFound() {
    const location = useLocation()
  return (
    <>
    <h3>Error 404 Page not found with the path {location.pathname}</h3>
    <Link to="/">Go back to Home</Link>
    </>
  )
}
