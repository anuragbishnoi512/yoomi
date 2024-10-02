import React from 'react'
import CommonButton from './common/CommonButton'
import weeklyReport from '../assets/images/webp/report-chart.webp'
import daysPercent from '../assets/images/webp/days-precent.webp'
import rangeMotion from '../assets/images/webp/range-motion.webp'

const Analytics = () => {
  return (
    <div className='mt-[97px]'>
      <div className="container">
        <div className='justify-between w-full p-[48px_37px_47px_34px] shadow-4xl flex rounded-[32px] items-center'>
          <div className='w-[404px] h-[218px]'>
            <h2 className='text-darkCyan font-medium text-base leading-5 font-inter'>REPORT</h2>
            <h2 className='text-black font-plus font-normal text-custom-lg leading-9 mt-2'>Reporting + <span className='font-semibold'>Analytics</span></h2>
            <p className='text-black max-w-[385px] font-normal text-base leading-6 font-inter opacity-70 mt-5'>Track patient progress over time with compliance, pain, RPE, ROM and other key metrics</p>
            <CommonButton className='!p-[16px_20px] rounded mt-[37px]' button='View the Matrics' />
          </div>
          <div className='max-w-[619px] h-[454px] relative'>
            <img src={weeklyReport} alt="image/details" />
            <img src={daysPercent} alt="image/details" className='absolute right-6 bottom-[-3px]' />
            <img src={rangeMotion} alt="image/details" className='absolute min-h-[141px] max-w-[282px] top-[-33px] left-[-24px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics