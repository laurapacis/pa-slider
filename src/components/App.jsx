import React from 'react';

import Slider from './Slider';

import image1 from '../assets/image-1.jpeg';
import image2 from '../assets/image-2.jpeg';
import image3 from '../assets/image-3.jpeg';
import image4 from '../assets/image-4.jpg';
import image5 from '../assets/image-5.jpeg';

import '../App.css';

const App = () => {
  return (
    <>
      <div className="sliders">
        <Slider images={[image1, image2, image3, image4, image5]} />
      </div>
      
    </>
  );
};

export default App;