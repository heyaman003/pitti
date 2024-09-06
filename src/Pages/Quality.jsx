import React from "react";
import AwardsCompo from "../Components/AwardsCompo/AwardsCompo";

const Quality = () => {
  return (
    <div className="chairman-message-div">
      <div>
        <p className="bold-b-h">Quality</p>
        <p className="big-heading-financial">
          Raising the bar of <br /> excellence every day
        </p>
        <p className="font-bold w-[80%] mb-4">
          Our manufacturing operations, spanning tooling, laminations,
          assemblies, castings, fabrication, and machining are centrally managed
          through integrated SAP software, a unified Quality Management System
          (QMS). This coordination allows us to specialise in manufacturing
          high-margin and value-added machined products.
        </p>
      </div>
      <p>
        We have attained quality accreditations for our integrated management
        systems, highlighting our proficiency in process design and automation.
        We are committed to delivering high-quality products through our
        advanced and integrated manufacturing operations. This approach allows
        us to develop tailored solutions that meet our customers' evolving
        requirements.
      </p>
      <div className="flex flex-wrap gap-5 mt-5">
      <AwardsCompo name={'ISO 9001:2015'} desc={'For quality management system'}/>
      <AwardsCompo name={'IATF 16949:2016'} desc={'International Automotive Task Force certification for Automobile products'}/>
      <AwardsCompo name={'ISO 14001:2015'} desc={'For environmental management'}/>
      <AwardsCompo name={'EN 15085'} desc={'For welding of railway vehicles and components'}/>
      <AwardsCompo name={'ISO 3834-2'} desc={'For welding products'}/>
      <AwardsCompo name={'TPG certification'} desc={'Transportation power generation certification'}/>
      </div>
      
    </div>
  );
};

export default Quality;
