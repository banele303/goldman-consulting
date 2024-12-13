'use client'
import { Phone} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ContactCTA() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-xl md:text-3xl font-bold mb-4">Ready to Transform Your Company?</h2>
          <p className="text-xl mb-8">Contact us today for a free consultation </p>
          <Button asChild className="hidden md:inline-flex" variant="outline">
              <Link href="tel:+1234567890">
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </Link>
            </Button>
        </motion.div>
      </div>
    </section>
  )
}
