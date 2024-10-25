import React from 'react';
import './Section.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Hero from '../Hero/Heo';
const Section = () => {
  const navi = useNavigate()
  function aboutNav(){
    navi('/about')
  }
    return (
        <div id='section'>
            <div className="container">
                <div className="section">
                <div className='swip'>
      <Swiper
              slidesPerView={1}
        spaceBetween={30}
        loop={true}

        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://www.kfc.kg/admin/files/5931.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.kfc.kg/admin/files/5921.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.kfc.kg/admin/files/5927.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.kfc.kg/admin/files/5854.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.kfc.kg/admin/files/5857.jpg" alt="" /></SwiperSlide>
        
      </Swiper>
    </div>

    <div className='swip2'>
      <Swiper
              slidesPerView={1}
        spaceBetween={30}
        loop={true}

        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://www.kfc.kg/admin/files/5882.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.kfc.kg/admin/files/5944.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.kfc.kg/admin/files/5957.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.kfc.kg/admin/files/5947.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.kfc.kg/admin/files/5941.jpg" alt="" /></SwiperSlide>
        
      </Swiper>
    </div>



                </div>
                <div className="about">
                  <h1>Как курица стала KFC</h1>
                <button onClick={() => aboutNav()}>Узнать о нашей истории</button>
                  <Hero/>
                </div>
                  
            </div>

        </div>
    );
};

export default Section;