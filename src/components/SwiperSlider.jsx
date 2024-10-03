import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import clapingMan from '../assets/images/webp/claping-man.webp'
import doctor from '../assets/images/webp/doctor.webp'
import patient from '../assets/images/webp/patient.webp'

import { FreeMode, Thumbs } from 'swiper/modules';

const SwiperSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div>
            <Swiper
                loop={true}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <img src={clapingMan} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={doctor} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={patient} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={clapingMan} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={doctor} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={patient} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={clapingMan} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={doctor} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={patient} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={clapingMan} />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={clapingMan} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={doctor} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={patient} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={clapingMan} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={doctor} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={patient} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={clapingMan} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={doctor} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={patient} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={clapingMan} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SwiperSlider