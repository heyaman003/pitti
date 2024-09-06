import React from 'react'

const AwardsCompo = ({name,desc}) => {
  return (
    <div className='w-[400px]'>
      <img className='w-[70px] mix-blend-multiply' src="/Quality/awardsIco.png" alt="" />
      <h2 className='font-bold text-[#a77a5d] text-3xl'>{name}</h2>
      <p>{desc}</p>
    </div>
  )
}

export default AwardsCompo
