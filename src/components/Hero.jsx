import React, { useState } from 'react'
import CommonButton from './common/CommonButton'

const Hero = () => {
  const [email, setEmail] = useState('')
  return (
    <div className='bg-hero-layer bg-cover bg-no-repeat bg-center pt-[129px] min-h-[828px]'>
      <div className='container'>
        <div className='flex justify-center items-center flex-col'>
          <h1 className='font-plus font-normal leading-custom-2xl text-custom-2xl text-center text-black max-w-[838px]'>
            <span className='font-extrabold'>Next Generation</span> Patient Engagement and RTM Solution✨
          </h1>
          <p className='font-inter font-normal text-2xl leading-7 opacity-70 mt-2'>Industry leading AI motion-tracking technology</p>
          <form id='fromEmail' className='max-w-[428px] w-full p-1.5 mx-auto bg-white rounded flex justify-between items-center mt-7 lg:mt-14 shadow-3xl'>
            <input type="email" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} className='font-inter font-medium placeholder:text-black text-base opacity-70 px-1.5 outline-none max-w-[292px] w-full' />
            <CommonButton button="Get Started" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Hero