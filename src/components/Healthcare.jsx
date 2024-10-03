import React from 'react'
import nih from '../assets/images/webp/nih.webp'
import carol from '../assets/images/webp/carol.webp'
import rwj from '../assets/images/webp/rwj.webp'
import jaj from '../assets/images/webp/jaj.webp'
import cornell from '../assets/images/webp/cornell.webp'
const Healthcare = () => {
  return (
    <div>
      <div className="container">
        <div className='flex items-center flex-col mt-[87px]'>
          <p className='font-inter font-medium text-base text-center text-darkCyan'>PLATFORM</p>
          <h2 className='font-plus font-normal text-custom-xl leading-custom-xl text-center max-w-[684px] mt-2'>Recognized by Leading <span className='font-semibold'>Healthcare Institutions</span></h2>
        </div>
        <div className='flex gap-6 mt-[37px] pb-[95px]'>
          <div className='border p-[40px_57px_38px_57px] max-w-[207.83px] shadow-5xl rounded'>
            <img src={nih} alt="icon/image" className='max-w-[92.73px]' />
          </div>
          <div className='border p-[28px_63px_28px_64px] max-w-[207.83px] shadow-5xl rounded'>
            <img src={carol} alt="icon/image" className='max-w-[80.91px]' />
          </div>
          <div className='border p-[45px_55px_45px_55px] max-w-[207.83px] shadow-5xl rounded'>
            <img src={rwj} alt="icon/image" className='max-w-[96.37px]' />
          </div>
          <div className='border p-[33px_65px_34px_65px] max-w-[207.83px] shadow-5xl rounded'>
            <img src={jaj} alt="icon/image" className='max-w-[77.68px]' />
          </div>
          <div className='border p-[23px_57px_23px_57px] max-w-[207.83px] shadow-5xl rounded'>
            <img src={cornell} alt="icon/image" className='max-w-[92.53px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Healthcare