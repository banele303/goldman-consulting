'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X } from 'lucide-react'

const images = [
  { src: '/environ/env-hero.jpeg', alt: 'Environmental Protection 1' },
  { src: '/environ/env.jpeg', alt: 'Environmental Protection 2' },
  { src: '/environ/civil.jpeg', alt: 'Sustainability Project 1' },
  { src: '/environ/alumin.jpeg', alt: 'Green Solutions 1' },
  { src: '/environ/envpump.jpeg', alt: 'Waste Management' },
  { src: '/environ/envbh.jpeg', alt: 'Green Initiative' },
]

export default function GreenShieldGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-emerald-800">Our Environmental Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              layoutId={`image-${index}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer shadow-lg group"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-5xl h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Selected Project"
                fill
                className="object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
