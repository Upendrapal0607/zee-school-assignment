import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../Pages/HomePage'

import { Appointment } from '../Pages/Appointment'
import LoginPage from '../Pages/Login'
import { Visit } from '../Components/Visit'

export const MainRoute = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element = {<HomePage/>}/>
          <Route path="/login" element = {<LoginPage/>}/>
          <Route path="/appointment" element = {<Appointment/>}/>
          <Route path="/visit" element = {<Visit/>}/>
        </Routes>
    </div>
  )
}
