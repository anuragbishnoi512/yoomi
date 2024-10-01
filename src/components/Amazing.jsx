import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import CommonButton from './common/CommonButton'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import checkBox from '../assets/images/webp/checkbox.webp';
import nextButton from '../assets/images/svg/next-button.svg';
import prevButton from '../assets/images/svg/prev-button.svg';
import firstSlideImg from '../assets/images/webp/frist-slide.webp';
import secondSlideImg from '../assets/images/webp/second-slide.webp';

const Amazing = () => {
  return (
    <div>
      <div className='container'>
        <div className='flex flex-col items-center'>
          <p className='text-darkCyan font-inter font-medium text-base leading-5 text-center'>FEATURES</p>
          <h2 className='text-center font-plus font-normal text-custom-xl leading-custom-xl my-2.5'>Explore Our <span className='font-semibold'>Amazing Features</span></h2>
          <p className='max-w-[724px] font-inter font-normal text-base text-center'>Yoomi is more than just a regular remote monitoring solution. Our product supports patients and providers through every step of the rehabilitation process</p>
        </div>
        <div className='flex gap-10 justify-between w-full rounded-[32px] shadow-4xl pt-[108px] pb-[60px] p-[0px_0px_0px_30px] mt-[55px]'>
          <div className='max-w-[468px]'>
            <h3 className='text-base leading-5 font-medium font-inter text-darkCyan'>Library</h3>
            <h2 className='text-custom-lg leading-custom-lg font-normal text-black mt-2'>
              Extensive Exercise <span className='font-semibold'>Library</span>
            </h2>
            <div className='mt-[21px]'>
              {Array.from({ length: 3 }).map((_, index) => (
                <div className='flex items-center mt-[9px] gap-[15px]' key={index}>
                  <img src={checkBox} alt={`Exercise option ${index + 1}`} />
                  <p className='max-w-[394px]'>
                    {index === 0 ? "Utilize Yoomi’s HEP templates to quickly create and assign programs to your patients" : index === 1 ? "Choose from our library of exercises for all patient cases" : "Use Yoomi’s industry-leading exercise generation tool to create your own exercises that track adherence and form in seconds"}
                  </p>
                </div>
              ))}
            </div>
            <CommonButton className='mt-[37px] rounded !p-[16px_18px]' button='View the Library' />
          </div>
          <div className='relative w-full max-w-[569px]'>
            <Swiper
              spaceBetween={35}
              slidesPerView={1.2}
              loop={true}
              navigation={{
                nextEl: ".next-button-swiper",
                prevEl: ".prev-button-swiper",
              }}
              modules={[Navigation]}
            >
              {[firstSlideImg, secondSlideImg, firstSlideImg, secondSlideImg].map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`Slider pics ${index + 1}`} className='w-full max-w-[460px] min-h-[331px]' />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className='flex gap-[10px] mt-[15px]'>
              <span className='preview-back prev-button-swiper cursor-pointer w-[34px] h-[34px] bg-white border border-black rounded-full grid place-items-center'>
                <img src={prevButton} alt="prev/slide" />
              </span>
              <span className='preview-next next-button-swiper cursor-pointer w-[34px] h-[34px] bg-darkCyan rounded-full border border-darkCyan grid place-items-center'>
                <img src={nextButton} alt="next/slide" />
              </span>
            </div>
            <div className='bg-lightBlue w-[520px] h-[262px] absolute top-[-47px] right-0'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Amazing