import React from 'react';


const Indicator = ({ currentSlide, amountSlides, nextSlide }) => {
    return (
        <div className='indicator-wrapper'>
            {Array(amountSlides)
                .fill(1)
                .map((_, i) => (
                    <div className='square'
                        key={i}
                        isActive={currentSlide === i}
                        style={{backgroundColor: currentSlide === i ? '#371e07' : '#d7d3c8'}}
                        onClick={() => nextSlide(i)}
                    ></div>
                ))}
        </div>
    );
};

export default Indicator;
