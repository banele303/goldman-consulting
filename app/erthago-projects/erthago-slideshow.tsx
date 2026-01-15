'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const images = [
  {
    src: '/dilon-const/const1.jpeg',
    alt: 'Construction Project 1',
  },
  {
    src: '/dilon-const/const2.jpeg',
    alt: 'Construction Project 2',
  },
  {
    src: '/consulting/const-hero.jpeg',
    alt: 'Construction Project 3',
  },
  {
    src: '/consulting/house.jpeg',
    alt: 'Construction Project 4',
  },
  {
    src: '/dilon-const/const3.jpeg',
    alt: 'Construction Project 5',
  },
  {
    src: '/consulting/const.jpeg',
    alt: 'Construction Project 6',
  }
]

export default function ErthagoSlideshow() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-[350px] rounded-xl overflow-hidden shadow-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
