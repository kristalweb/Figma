import React from 'react'

import { Routes , Route } from "react-router-dom"
import { Home } from '../SecondaryPages/Home'

export function ShowPage() {
  return (
    <div className='ShowPage'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/' element={}/>
          <Route path='/' element={}/>
          <Route path='/' element={}/> */}
        </Routes>
    </div>
  )
}
