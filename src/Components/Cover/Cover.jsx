import React, { useRef, useEffect } from 'react';
import "./Cover.css"
const Cover = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <div className='relative cover-container w-[100vw]'>
        <div className='absolute cover-label'>
        <b>Pitti Engineering Limited</b>
        <p>Annual Report 2022-23</p>
        </div>
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      style={{
        width: "90%",
        margin: "auto",
      }}
    >
      <source src="./homepage/Cover.mp4" type="video/mp4" />
    </video>
    </div>
  );
};

export default Cover;
