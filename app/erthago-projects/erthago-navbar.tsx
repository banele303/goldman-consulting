'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export function ErthagoNavbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      'sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
      isScrolled && 'shadow-lg'
    )}>
      <div className="container flex h-24 items-center">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center pl-[2rem]">
            <Image src="/enrthgo-logo.jpeg" alt="Erthago Projects Logo" width={240} height={80} className="h-12 md:h-20 w-auto max-h-12 md:max-h-20 rounded-md" />
          </div>
          
          <div className="flex items-center space-x-4 pr-4 md:pr-0">
            <div className="hidden md:flex space-x-4 mr-4">
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors"><Linkedin size={20} /></a>
            </div>
            <Button asChild className="inline-flex bg-green-600 hover:bg-green-700 text-white border-green-600" variant="outline">
              <Link href="tel:+27634582860">
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
