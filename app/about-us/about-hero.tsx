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

     
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  )
}