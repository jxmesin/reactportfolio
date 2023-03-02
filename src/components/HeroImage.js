import React from 'react';
import backgroundImage from '../assets/img/heroimg.png';

function HeroImage() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className='img-fluid '
        style={{ backgroundImage: "url(" + backgroundImage + ")",  backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Heading</h1>
              <h4 className='mb-3'>Subheading</h4>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Call to action
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroImage;