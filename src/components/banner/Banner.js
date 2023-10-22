import React from 'react'
import './banner.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import bannerImg2 from '../../assets/11583180_4790923.jpg'
import bannerImg1 from '../../assets/black-friday-elements-assortment.jpg'

const Banner = () => {
  return (
    <section className="container banner ">
      <Swiper
        spaceBetween={50}
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
        <SwiperSlide>
          <img src={bannerImg1} alt="banner1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerImg2} alt="banner2" />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Banner