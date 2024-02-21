// ImageCarousel.jsx

import React from 'react';
import { Carousel } from 'react-bootstrap';
import img2 from './p2.png';
import img3 from './p3.png';

const ImageCarousel = () => {
  return (
    <div className='position-relative '>
      <div className='d-flex position-absolute z-1'>
        <Carousel controls={false} indicators={false} className="w-100">
          <Carousel.Item>
            <div className=''>
            <img
              className="d-block"
              src={img2}
              alt=""
              
            />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className=''>
            <img
              className="d-block "
              src={img3}
              alt=""
              
            />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='background d-flex justify-content-between align-items-end p-5 position-absolute z-0' style={{top:'250px'}}>
        <div>STEP 1</div>
        <div className='fs-4'>We put everything together</div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
            <path d="M33.6471 18.353C33.6471 26.7997 26.7997 33.6471 18.353 33.6471C9.90625 33.6471 3.05884 26.7997 3.05884 18.353C3.05884 9.90625 9.90625 3.05884 18.353 3.05884C26.7997 3.05884 33.6471 9.90625 33.6471 18.353Z" stroke="black" stroke-width="3.05882" />
            <path d="M20.6471 12.2354L14.5294 18.353L20.6471 24.4706" stroke="black" stroke-width="3.05882" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
            <path d="M3.35293 18.353C3.35293 26.7997 10.2003 33.6471 18.647 33.6471C27.0938 33.6471 33.9412 26.7997 33.9412 18.353C33.9412 9.90625 27.0938 3.05884 18.647 3.05884C10.2003 3.05884 3.35293 9.90625 3.35293 18.353Z" stroke="black" stroke-width="3.05882" />
            <path d="M16.3529 12.2354L22.4706 18.353L16.3529 24.4706" stroke="black" stroke-width="3.05882" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
