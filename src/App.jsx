import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer/Footer'
import FinancialPerformance from './Pages/FinincalPerfomance';
import AcceleratingGrowth from './Pages/AcceleratingGrowth';
import ChairmanMessage from './Pages/Chairmanmessgae';
import Excellence from './Pages/Excellence';
import EngineeringFutureStakeholder from './Pages/EngineeringFutureStakeholder';
import Engineering from './Pages/Engineering';
import OperatingLandScape from './Pages/OperatingLandScape';
import Operations from './Pages/Operations';
import DistinguishClients from './Pages/DistinguishClients';
import Quality from './Pages/Quality';
import Awards from './Pages/Awards';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/financial' element={<FinancialPerformance />}/>
        <Route path='/accelerating-growth' element={<AcceleratingGrowth />}/>
        <Route path='/management-message' element={<ChairmanMessage />}/>
        <Route path='/excellence' element={<Excellence />}/>
        <Route path='/engineering-future-stakeholder' element={<EngineeringFutureStakeholder />}/>
        <Route path='/engineering-excellence' element={<Engineering />}/>
        <Route path='/operating-landscape' element={<OperatingLandScape />}/>
        <Route path='/operations' element={<Operations />}/>
        <Route path='/distinguished-clients' element={<DistinguishClients />}/>
        <Route path='/quality' element={<Quality />}/>
        <Route path='/awards' element={<Awards />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
