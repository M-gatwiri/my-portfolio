import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router'

function LayOut() {
  return (
    <div className='layout'>
        <NavBar/>
        <main className='main'>
            <Outlet/>
        </main>
    </div>
  )
}

export default LayOut