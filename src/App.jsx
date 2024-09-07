import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChairmanMessage from './Pages/Chairmanmessgae'
import FinancialPerformance from './Pages/FinincalPerfomance'
import Quality from './Pages/Quality'
import Awards from './Pages/Awards'
import Engineering from './Pages/Engineering'
import OperatingLandScape from './Pages/OperatingLandScape'
import Operations from './Pages/Operations'
import Test from './Pages/Test';
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
    {/* <ChairmanMessage/> */}
    {/* <FinancialPerformance/> */}
    {/* <Quality/>
    <Awards/> */}
    {/* <Engineering/> */}
    {/* <OperatingLandScape/> */}
    {/* <OperatingLandScape/> */}
    {/* <Operations/> */}
    {/* <Test/> */}
    <Footer/>
    </div>
  )
}

export default App
