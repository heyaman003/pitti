import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import 'slick-carousel/slick/slick.css'; // Direct CSS import
import 'slick-carousel/slick/slick-theme.css'; // Direct CSS import
import './Offerings.css'; // Custom CSS for carousel

const Offerings = () => {
  // Define image sets and titles
  const allImages = {
    mc: [
      './homepage/mc/Artboard 6@5x.png',
      './homepage/mc/Artboard 5@5x.png',
      './homepage/mc/Artboard 7@5x.png',
      './homepage/mc/Artboard 8@5x.png',
      './homepage/mc/Artboard 9@5x.png',
      './homepage/mc/Artboard 10@5x.png',
      './homepage/mc/Artboard 11@5x.png',
      './homepage/mc/Artboard 12@5x.png',
      './homepage/mc/Artboard 13@5x.png',
    ],
    ree: [
      './homepage/ree/Artboard 14@5x.png',
      './homepage/ree/Artboard 15@5x.png',
      './homepage/ree/Artboard 16@5x.png',
      './homepage/ree/Artboard 17@5x.png',
      './homepage/ree/Artboard 18@5x.png',
      './homepage/ree/Artboard 19@5x.png',
      './homepage/ree/Artboard 20@5x.png',
      './homepage/ree/Artboard 21@5x.png',
      './homepage/ree/Artboard 22@5x.png',
      './homepage/ree/Artboard 23@5x.png',
      './homepage/ree/Artboard 24@5x.png',
      './homepage/ree/Artboard 25@5x.png',
      './homepage/ree/Artboard 26@5x.png',
      './homepage/ree/Artboard 27@5x.png',

    ],
  };

  // Define titles and colors for each filter
  // const filterData = {
  //   members: {
  //     title1: "Know our Board",
  //     title2: "Members",
  //     clr: "#efa5b1",
  //   },
  //   team: {
  //     title1: "Know our Management",
  //     title2: "Team",
  //     clr: "#9484be",
  //   },
  // };

  // State for selected filter
  const [filter, setFilter] = useState('mc');
  const [animateKey, setAnimateKey] = useState(0);

  // Trigger animation on filter change
  useEffect(() => {
    setAnimateKey(prevKey => prevKey + 1);
  }, [filter]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.1, duration: 1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  // Slick Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Ensure arrows are enabled
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint as needed for different devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container cc">
      <h1 className="sec-heading mb-10 text-center">Wide Array of Offerings</h1>

      
      {/* Filter buttons */}
      <div className="filter-buttons">
        <button
          className={filter === 'mc' ? 'active' : ''}
          onClick={() => setFilter('mc')}
        >
          Machined Components
        </button>
        <button
          className={filter === 'ree' ? 'active' : ''}
          onClick={() => setFilter('ree')}
        >
         Rotating Electrical Equipment
        </button>
      </div>

      {/* Dynamic Headings */}
      <div className='text-center my-4'>
        
      </div>
      {/* Slider */}
      <AnimatePresence>
        <motion.div
          key={animateKey} // Key to trigger re-mounting
          className="slider-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Slider {...settings}>
            {allImages[filter].map((image, index) => (
              <motion.div
                key={index}
                className="carousel-slide cs"
                variants={itemVariants}
              >
                <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Offerings;
