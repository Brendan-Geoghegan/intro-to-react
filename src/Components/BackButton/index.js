import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

export default function BackButton() {
    const navigate = useNavigate()
  return (
    <>
    <br/>
    <button onClick={() => navigate(-1)}>Back Button</button>
    </>
  )
}
