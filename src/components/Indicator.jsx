import React from 'react';


const Indicator = ({ currentSlide, amountSlides, nextSlide }) => {
    return (
        <div className='indicator-wrapper'>
            {Array(amountSlides)
                .fill(1)
                .map((_, i) => (
                    <div className='dot'
                        key={i}
                        isActive={currentSlide === i}
                        style={{backgroundColor: currentSlide === i ? '#58bab8' : 'chartreuse'}}
                        onClick={() => nextSlide(i)}
                    ></div>
                ))}
        </div>
    );
};

export default Indicator;
