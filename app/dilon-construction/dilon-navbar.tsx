'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export function DilonNavbar() {
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
            <Image src="/dilon.jpeg" alt="Dilon Construction Logo" width={180} height={48} className="h-12 w-auto max-h-12" />
          </div>
          
          <div className="flex items-center space-x-4">
            <Button asChild className="inline-flex" variant="outline">
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
