import React, { useState, useEffect } from 'react';
import Indicator from './Indicator';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { ImageDescriptions } from './ImageDescriptions';

const ImageSlider = ({
  images = [],
  autoPlay = true,
  // eslint-disable-next-line
  autoPlayTime = 4000,
  children,
  ...props
}) => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  useEffect(() => {
      const timer = setTimeout(() => {
        nextSlide();
      }, autoPlayTime);

      return () => clearTimeout(timer);
      // eslint-disable-next-line
  }, [currentSlide]);
    

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <>
      <FaArrowAltCircleLeft className='arrow-left'
        onClick={prevSlide}
      />

      <FaArrowAltCircleRight className='arrow-right'
        onClick={nextSlide}
      />

      <div className='wrapper' {...props}>
        {images.map((imageUrl, index) => (
          <div className='slide'
            key={index}
            style={{
              backgroundImage: `url(${imageUrl})`,
              marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
            }}
          ></div>
        ))}
      </div>

      <div className='text-wrapper' {...props}>
        {ImageDescriptions.map((item, index) => (
          <ul className='text-slide'
            key={index}
            style={{
              color: 'white',
              marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
            }}
          >
            <li>{item.title}</li>
            <li>{item.label}</li>
          </ul>
        ))}
      </div>
      
      <Indicator
        currentSlide={currentSlide}
        amountSlides={images.length}
        nextSlide={nextSlide}
      />
    </>
  );
};

export default ImageSlider;