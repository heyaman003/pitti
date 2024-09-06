import React from 'react'

const Operations = () => {
  return (
    <div className="chairman-message-div">
       <div>
      <p className="bold-b-h">Operations</p>
      <p className="big-heading-financial">
      Taking a closer look at our integrated operations
        </p>
        <p className="font-bold w-[80%] mb-4">
        Our production facilities, supported by advanced technology, are strategically positioned near both our customers and raw material suppliers, facilitating cost efficiencies and enhancing productivity. Our manufacturing facilities are equipped with best-in-class automation and equipment, enabling economies of scale.
        </p>
        <div className="flex justify-between">
            <div className='md:w-[50%]'>
                <b>Hyderabad, Telengana</b>
              <img className='w-full h-[400px] object-contain' src="/Operations/op1.jpg" alt="" />
            </div>
            <div className='md:w-[50%]'>
                <p className='md:ml-[50px]'><b>Aurangabad, Maharashtra</b></p>
            <img className='w-full h-[360px] object-contain mt-2' src="/Operations/op2.jpg" alt="" />
            </div>
        </div>
        <div className="flex justify-between">
            <div className='md:w-[45%]'>
              <img className=' h-[400px] object-contain' src="/Operations/g1.png" alt="" />
            </div>
            <div className='md:w-[45%]'>
            <img className='h-[400px] object-contain mt-2' src="/Operations/g2.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Operations
