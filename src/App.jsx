import { useState } from 'react'
import './App.css'
import ChairmanMessage from './Pages/Chairmanmessgae'
import FinancialPerformance from './Pages/FinincalPerfomance'
import Quality from './Pages/Quality'
import Awards from './Pages/Awards'
import Engineering from './Pages/Engineering'
import OperatingLandScape from './Pages/OperatingLandScape'
import Operations from './Pages/Operations'
import Test from './Pages/Test';
import DistinguishClients from './Pages/DistinguishClients'
import Excellence from './Pages/Excellence'
import EngineeringFutureStakeholder from './Pages/EngineeringFutureStakeholder'
import AcceleratingGrowth from './Pages/AcceleratingGrowth'
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
