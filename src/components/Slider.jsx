import React, { useState, useEffect } from 'react';
import Indicator from './Indicator';
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

  const nextSlide = (slideIndex = currentSlide + 1) => {
    const newSlideIndex = slideIndex >= length ? 0 : slideIndex;
    setCurrentSlide(newSlideIndex);
  }

  const prevSlide = (slideIndex = currentSlide - 1) => {
    const newSlideIndex = slideIndex >= length ? 0 : slideIndex;
    setCurrentSlide(newSlideIndex);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, autoPlayTime);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [currentSlide]);

  if (!Array.isArray(images) || length <= 0) {
    return null;
  }

  return (
    <>
      <div className='arrow-left' onClick={() => prevSlide()}></div>

      <div className='arrow-right' onClick={() => nextSlide()}></div>

      <div className='image-wrapper' {...props}>
        {images.map((imageUrl, index) => (
          <div className='image-slide'
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
          <div className='text-slide'
            key={index}
            style={{
              color: 'white',
              marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
            }}
          >
            <h3 className='item-title'>{item.title}</h3>
            <h3 className='item-label'>{item.label}</h3>
          </div>
        ))}
      </div>
      
      <Indicator
        currentSlide={currentSlide}
        amountSlides={length}
        nextSlide={nextSlide}
      />
    </>
  );
};

export default ImageSlider;