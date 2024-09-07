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
        <div>
          <div className='bg-[#eef3f2] p-4 mt-6'>
          <p className='text-xl'>
          We have vertically integrated our operations, encompassing tooling
to laminations and their assemblies, as well as machined casting, fabrication, and value-added processes. This integration enables us
to provide a comprehensive solution in the rotating equipment sector. Our emphasis on creating profitable value-added products has driven our transformation from an electrical lamination-focused business to a diversified company with a multi-product portfolio.
          </p>
          </div>
          
        </div>
      </div>
      <div>
      <p className='light-blue-text'>Highlights from our manufacturing facilities</p>
       <div className="flex justify-between">
        <div className='md:w-[48%]'>
          <img className='object-contain mb-3' src="/DistinuishClient/sa2.webp" alt="" />
          <b>Machining capacity</b>
          <p className='mt-2'>We are enhancing our machining capabilities by increasing the use of 4 & 5 Axis CNC machines for precision machining of products. The existing fleet of machines is operating at optimum capacity, and additional machines are being acquired to meet rising demand.</p>
        </div>
        <div className='md:w-[48%]'>
          <img className='object-contain mb-3' src="/DistinuishClient/sa3.webp" alt="" />
          <b>Lamination operation</b>
          <p className='mt-2'>With the positive growth forecast of electrical lamination
          in India, we aim to expand our market share. This involves additional processing, such as assembling partial products that were previously delivered in parts. We are also considering redesigning the operational layout to optimise facility utilisation, including the relocation of lamination operations
         to Aurangabad. This move is expected to streamline product movement and reduce delivery timelines.
           </p>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Operations
