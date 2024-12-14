'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

const slides = [
  {
    id: 1,
    title: "Welcome to Goldman Holdings Consulting",
    content: "Expert consulting solutions for diverse industries in South Africa.",
    image: "/consulting/hero-interior.jpeg"
  },
  {
    id: 2,
    title: "Our Expertise",
    content: "Comprehensive services for sustainable success across Construction, Manufacturing, and Environmental sectors.",
    image: "/consulting/const1.jpeg"
  },
  {
    id: 3,
    title: "Areas of Excellence",
    content: "Strategic Planning, Financial Advisory, and Business Transformation.",
    image: "/consulting/interior2.jpeg"
  },
  {
    id: 4,
    title: "Why Choose Us?",
    content: "At Goldman Holdings Consulting, we prioritize excellence, innovation, and tangible results.",
    image: "/consulting/excellence.jpeg"
  }
]

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full py-6 px-10 bg-gradient-to-r from-blue-900  to-blue-600 text-white text-center z-50">
        <h1 className="text-[22px] md:text-5xl font-extrabold">GOLDMAN HOLDING </h1>
        <p className="mt-2 text-[16px] md:text-2xl font-light">Your Trusted Partner in Building Wealth </p>
      </div>
      
      <Swiper
        effect={'fade'}
        fadeEffect={{ crossFade: true }}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} w-3 h-3 bg-white bg-opacity-50 rounded-full transition-all duration-300 hover:bg-opacity-100"></span>`
          },
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full md:h-[500px]">
              <Image
                src={slide.image}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                quality={100}
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-8">
                <h2 className="text-4xl pt-[2.5rem] md:text-6xl font-bold mb-4 text-white text-center transform transition-all duration-1000 ease-out"
                    style={{
                      opacity: index === activeIndex ? 1 : 0,
                      transform: index === activeIndex ? 'translateY(0)' : 'translateY(20px)',
                    }}>
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl mb-8 text-white text-center max-w-3xl transform transition-all duration-1000 ease-out delay-300"
                   style={{
                     opacity: index === activeIndex ? 1 : 0,
                     transform: index === activeIndex ? 'translateY(0)' : 'translateY(20px)',
                   }}>
                  {slide.content}
                </p>
                <a href="tel:+1234567890" className="mt-4 inline-block bg-orange-500 text-white text-xl md:text-2xl font-bold py-3 px-6 rounded-sm shadow-lg hover:bg-green-600 transition-all duration-300">Call Us: +27 63 199 7890</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeroSlider
