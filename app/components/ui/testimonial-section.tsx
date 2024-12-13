'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  { name: 'Nkululeko Nyathi.', text: 'Mongameli Plumbing provided excellent service. They were prompt, professional, and solved our plumbing issue quickly.' },
  { name: 'David L.', text: 'I\'ve been using their services for years. Always reliable and high-quality work. Highly recommended!' },
  { name: 'Emily K.', text: 'The team at Mongameli Plumbing is knowledgeable and friendly. They explained everything clearly and did a great job.' },
  { name: 'Blessed Sibanda.', text: 'The team at Mongameli Plumbing is knowledgeable and friendly. They explained everything clearly and did a great job.' },
  { name: 'Emily K.', text: 'The team at Mongameli Plumbing is knowledgeable and friendly. They explained everything clearly and did a great job.' },
  { name: 'Emily Sibs.', text: 'The team at Mongameli Plumbing is knowledgeable and friendly. They explained everything clearly and did a great job.' },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index)  => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <p className="font-semibold text-gray-800">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}