import React from 'react'
import CommonButton from './common/CommonButton'
import checkbox from '../assets/images/webp/checkbox.webp'
import feedbackOne from '../assets/images/webp/man-workout.webp'
import feedbackTwo from '../assets/images/webp/water-percent.webp'
import feedbackThree from '../assets/images/webp/women-workout.webp'

const Feedback = () => {
  return (
    <div>
      <div className="container">
        <div className='w-full p-[57px_28px_58px_33px] shadow-4xl rounded-[32px] flex justify-between items-center mt-[97px]'>
          <div className='w-[552px] h-[329px] relative '>
            <img src={feedbackOne} alt="pic/workout" />
            <img src={feedbackTwo} alt="pic/workout" className='absolute right-0 top-[-18px]' />
            <img src={feedbackThree} alt="pic/workout" className='absolute top-[-45px] left-[-30px]' />
          </div>
          <div className='w-[458px] h-[435px]'>
            <div>
              <h2 className='text-darkCyan font-medium text-base leading-5'>TRACKING</h2>
              <h2 className='font-normal font-plus text-custom-lg text-nowrap leading-9 mt-2'>Cutting Edge Motion <span className='font-semibold'>Tracking/</span></h2>
              <p className='font-semibold font-plus text-custom-lg leading-9'>Feedback</p>
              <div className='flex items-center gap-[15px] mt-5'>
                <img src={checkbox} alt="icon/checkbox" />
                <p className='font-inter font-normal text-base leading-6 max-w-[361px] text-black opacity-70'>Provides a holistic, real-time analysis of patient exercise form, capturing 300+ data points and critical metrics.</p>
              </div>
              <div className='flex items-center gap-[15px] mt-2'>
                <img src={checkbox} alt="icon/checkbox" />
                <p className='font-inter font-normal text-base leading-6 max-w-[361px] text-black opacity-70'>Delivers immediate feedback and guidance to correct and improve exercise form</p>
              </div>
              <div className='flex items-center gap-[15px] mt-2'>
                <img src={checkbox} alt="icon/checkbox" />
                <p className='font-inter font-normal text-base leading-6 max-w-[371px] text-black opacity-70'>Supported by the most accurate motion-tracking model designed for rehabilitation, Yoomi Vision</p>
              </div>
              <div className='flex items-center gap-[15px] mt-2'>
                <img src={checkbox} alt="icon/checkbox" />
                <p className='font-inter font-normal text-base leading-6 text-black opacity-70'>Requires no custom hardware, sensors, or equipment</p>
              </div>
              <CommonButton className='p-[16px_32px] rounded mt-[40px]' button='Test it Yourself' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback