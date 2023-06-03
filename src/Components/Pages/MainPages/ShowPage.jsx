import React from 'react'

import { Routes, Route } from "react-router-dom"
import { Home } from '../SecondaryPages/Home'
import { AboutUs } from '../SecondaryPages/AboutUs'
import { ForReference } from '../SecondaryPages/ForReference'
import { Xizmatlar } from '../SecondaryPages/Xizmatlar'

export function ShowPage() {
  return (
    <div className='ShowPage'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bizhaqimizda' element={<AboutUs />} />
        <Route path='/murojatuchun' element={<ForReference />} />
        <Route path='/xizmatlar' element={<Xizmatlar />} />
      </Routes>
    </div>
  )
}
