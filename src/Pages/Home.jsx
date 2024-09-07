import React from 'react'
import Cover from '../Components/Cover/Cover'
import Bod from '../Components/Bod/Bod'
import MdCeo from '../Components/MdCeo/MdCeo'
import About from '../Components/About/About'
import Offerings from '../Components/Offerings/Offerings'

const Home = () => {
  return (
    <div> 
        <Cover/>
        <About/>
        <MdCeo/>
        <Bod/>
        <Offerings/>
    </div>
    
  )
}

export default Home