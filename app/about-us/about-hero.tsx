'use client'

import { Phone, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function AboutHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <section ref={ref} className="relative h-[70vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/consulting/hero-interior.jpeg"
          alt="Goldman Holding Interior"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Goldman <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Holding</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Innovative Solutions for a Changing World. We build the future with precision and excellence.
          </p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Link href="tel:+27634582860" className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-orange-600 px-8 font-medium text-white transition-all duration-300 hover:bg-orange-700 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2">
              <span className="mr-2">
                <Phone className="h-5 w-5" />
              </span>
              <span className="relative text-lg">CALL NOW</span>
              <div className="absolute inset-0 -z-10 w-full translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:animate-shimmer"></div>
            </Link>
            
            <Link href="/contact" className="group inline-flex h-14 items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-105">
              <span className="text-lg">Contact Us</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  )
}