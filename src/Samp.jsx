import React from 'react'
import ImageCarousel from './ImageCarousel'

const Samp = () => {
  return (
    <div>
        <section>
                <div className=' position-relative '>
                    <div className='d-flex justify-content-center align-items-center m-5 position-absolute z-1 '>
                        <ImageCarousel />
                    </div>
                    <div className='background position-absolute z-0 d-flex align-items-end' style={{ marginTop: '300px' }}>
                        <div className='m-5 fw-medium '>
                            <span>STEP 1</span>
                            <span style={{ paddingLeft: '420px', paddingRight: '400px' }} className=' fs-2'>We put everything together</span>
                            <span style={{ fontSize: '40px', paddingRight: '20px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                                    <path d="M33.6471 18.353C33.6471 26.7997 26.7997 33.6471 18.353 33.6471C9.90625 33.6471 3.05884 26.7997 3.05884 18.353C3.05884 9.90625 9.90625 3.05884 18.353 3.05884C26.7997 3.05884 33.6471 9.90625 33.6471 18.353Z" stroke="black" stroke-width="3.05882" />
                                    <path d="M20.6471 12.2354L14.5294 18.353L20.6471 24.4706" stroke="black" stroke-width="3.05882" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            <span style={{ fontSize: '40px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                                    <path d="M3.35293 18.353C3.35293 26.7997 10.2003 33.6471 18.647 33.6471C27.0938 33.6471 33.9412 26.7997 33.9412 18.353C33.9412 9.90625 27.0938 3.05884 18.647 3.05884C10.2003 3.05884 3.35293 9.90625 3.35293 18.353Z" stroke="black" stroke-width="3.05882" />
                                    <path d="M16.3529 12.2354L22.4706 18.353L16.3529 24.4706" stroke="black" stroke-width="3.05882" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Samp