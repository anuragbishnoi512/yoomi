import React from 'react'
import plus from '../assets/images/webp/plus-ellipse.webp'

const Platform = () => {
  return (
    <div className='bg-[#F5F8FA] pt-[80px]'>
      <div className="container">
        <div>
          <p className='font-inter font-medium text-base text-center text-darkCyan'>PLATFORM</p>
          <h2 className='font-plus font-normal text-custom-xl leading-custom-xl text-center mt-2'>Through <span className='font-semibold'>Our Platform</span></h2>
          <p className='font-inter font-normal text-base text-center mt-4'>We’ve helped out partners and patients achieve</p>
        </div>
        <div className='pt-[59px] pb-[78px] flex flex-row gap-[29px] justify-center'>
          <div className='bg-[#85B6A6] relative p-[41px_60px_42px_60px] flex flex-col items-center max-w-[268px] rounded'>
            <p className='font-inter font-semibold text-custom-3xl leading-custom-3xl text-center text-white'>50%</p>
            <p className='font-inter font-normal text-xl text-center max-w-[148px] text-white'>Reduction in Pain</p>
            <img src={plus} alt="ellipse/icon" className='absolute bottom-0 right-0 max-w-[123.63px]' />
          </div>
          <div className='bg-[#82B2C2] relative p-[42px_41px_42px_41px] flex flex-col items-center max-w-[268px] rounded'>
            <p className='font-inter font-semibold text-custom-3xl leading-custom-3xl text-center text-white'>90%</p>
            <p className='font-inter font-normal text-xl text-center max-w-[184.96px] text-white'>Increase In-Patient Satisfaction</p>
            <img src={plus} alt="ellipse/icon" className='absolute bottom-0 right-0 max-w-[123.63px]' />
          </div>
          <div className='bg-[#076787] relative p-[59px_57px] flex flex-col items-center max-w-[268px] rounded'>
            <p className='font-inter font-semibold text-custom-3xl leading-custom-3xl text-center text-white'>60%</p>
            <p className='font-inter font-normal text-xl text-center max-w-[154px] text-white'>Faster Recovery</p>
            <img src={plus} alt="ellipse/icon" className='absolute bottom-0 right-0 max-w-[123.63px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Platform