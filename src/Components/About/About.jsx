import React from 'react'
import "./About.css"

const About = () => {
    return (
        <div className='marginal'>
            <h1 className="sec-heading text-center">About Pitti </h1>
            <h1 className='brown-heading text-center'>Accelerating growth through integrated excellence</h1>
            <p className='text-center font-semibold text-2xl my-3'>
                We are engineering
                excellence with a long-
                standing experience
                of over three decades.
                We commenced our
                operations in 1987
                as a manufacturer of
                electrical laminations
                for applications used in
                a wide array of electrical
                equipment.
            </p>
            <div className="flip-card-container">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className='icon-div'>
            <img src="./homepage/eye.png" alt="" />
            </div>
            <h2>Vision</h2>
          </div>
          <div className="flip-card-back">
            <p>Simplifying 
            Engineering Supply Chain</p>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className='icon-div'>
            <img src="./homepage/missin.png" alt="" />
            </div>
            <h2>Mission </h2>
          </div>
          <div className="flip-card-back">
            <ul>
                <li>To enhance capabilities with cutting edge technology </li>
                <li>To integrate multiple engineering processes </li>
                <li>To contract customer supply chain </li>
                <li>To provide uniquely integrated component</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}

export default About