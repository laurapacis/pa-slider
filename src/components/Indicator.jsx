import React from 'react';

 const DOT_STYLES = {
    width: '12px',
    height: '12px',
    // backgroundColor: `${props => props.isActive ? 'red': 'black'}`,
    backgroundColor: '#58bab8',
    margin: '5px',
    transition: '750ms all ease-in-out',
}

const Indicator = ({ currentSlide, amountSlides, nextSlide }) => {
    return (
        <div className='indicator-wrapper'>
            {Array(amountSlides)
                .fill()
                .map((_, i) => (
                    <div style={DOT_STYLES}
                        key={i}
                        isActive={currentSlide === i}
                        onClick={() => nextSlide(i)}
                    ></div>
                ))}
        </div>
    );
};

export default Indicator;
